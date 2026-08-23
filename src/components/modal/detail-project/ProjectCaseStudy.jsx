import { memo } from "react";
import {
  CircleAlert,
  GitBranch,
  ListChecks,
  Target,
  UserCheck,
  Wrench,
} from "lucide-react";
import { useTranslation } from "@/i18n";

const SectionHeading = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 md:gap-3 text-porto-text">
    <Icon className="h-4.5 w-4.5 md:h-5 md:w-5 shrink-0" />
    <h3 className="text-[17px] md:text-[20px] font-semibold leading-none">
      {children}
    </h3>
  </div>
);

/**
 * Renders an optional, bilingual mini case study for a project.
 * Every section is optional; nothing renders when `project.caseStudy`
 * is absent, so legacy projects keep their existing detail layout.
 */
const ProjectCaseStudy_ = ({ project }) => {
  const { t } = useTranslation();
  const cs = project?.caseStudy;

  if (!cs) return null;

  const paragraphs = (items) =>
    (items ?? []).map((item, i) => (
      <p
        key={item.key ?? i}
        className="text-[14px] md:text-[15px] leading-relaxed text-porto-muted"
      >
        {t(item.key, item.defaultText)}
      </p>
    ));

  return (
    <div
      className="
        space-y-6 pt-2
        xl:max-h-[52vh] xl:overflow-y-auto xl:pr-2 porto-scrollbar
      "
    >
      {cs.overview?.length ? (
        <section className="space-y-3">
          {paragraphs(cs.overview)}
        </section>
      ) : null}

      {cs.problem?.length ? (
        <section className="space-y-3">
          <SectionHeading icon={CircleAlert}>
            {t("CaseProblem", "Problem")}
          </SectionHeading>
          {paragraphs(cs.problem)}
        </section>
      ) : null}

      {cs.ownership ? (
        <section className="space-y-3">
          <SectionHeading icon={UserCheck}>
            {t("CaseOwnership", "Ownership")}
          </SectionHeading>
          <p className="rounded-2xl border border-porto-border bg-background/60 px-4 py-3 text-[14px] md:text-[15px] font-medium leading-relaxed text-porto-text">
            {t(cs.ownership.key, cs.ownership.defaultText)}
          </p>
        </section>
      ) : null}

      {cs.contributions?.length ? (
        <section className="space-y-3">
          <SectionHeading icon={ListChecks}>
            {t("KeyContributions", "Key Contributions")}
          </SectionHeading>
          <ul className="space-y-2">
            {cs.contributions.map((item, i) => (
              <li
                key={item.key ?? i}
                className="flex gap-2.5 text-[14px] md:text-[15px] leading-relaxed text-porto-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-porto-btn/70" />
                {t(item.key, item.defaultText)}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {cs.decisions?.length ? (
        <section className="space-y-3">
          <SectionHeading icon={GitBranch}>
            {t("EngineeringDecisions", "Engineering Decisions")}
          </SectionHeading>
          <ul className="space-y-3">
            {cs.decisions.map((item, i) => (
              <li key={item.descKey ?? i} className="space-y-0.5">
                <p className="text-[14px] md:text-[15px] font-semibold text-porto-text">
                  {item.titleKey ? t(item.titleKey, item.title) : item.title}
                </p>
                <p className="text-[13.5px] md:text-[14.5px] leading-relaxed text-porto-muted">
                  {t(item.descKey, item.defaultDesc)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {cs.challenges?.length ? (
        <section className="space-y-3">
          <SectionHeading icon={Wrench}>
            {t("ChallengesSolutions", "Challenges & Solutions")}
          </SectionHeading>
          <ul className="space-y-3">
            {cs.challenges.map((item, i) => (
              <li key={item.challengeKey ?? i} className="space-y-1">
                <p className="text-[13.5px] md:text-[14.5px] leading-relaxed text-porto-muted">
                  <span className="font-semibold text-porto-text">
                    {t("ChallengeLabel", "Challenge")}:
                  </span>{" "}
                  {t(item.challengeKey, item.defaultChallenge)}
                </p>
                <p className="text-[13.5px] md:text-[14.5px] leading-relaxed text-porto-muted">
                  <span className="font-semibold text-porto-text">
                    {t("SolutionLabel", "Solution")}:
                  </span>{" "}
                  {t(item.solutionKey, item.defaultSolution)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {cs.outcome?.length ? (
        <section className="space-y-3">
          <SectionHeading icon={Target}>
            {t("CaseOutcome", "Outcome")}
          </SectionHeading>
          <ul className="space-y-2">
            {cs.outcome.map((item, i) => (
              <li
                key={item.key ?? i}
                className="flex gap-2.5 text-[14px] md:text-[15px] leading-relaxed text-porto-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-porto-btn/70" />
                {t(item.key, item.defaultText)}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
};

const ProjectCaseStudy = memo(ProjectCaseStudy_);
export default ProjectCaseStudy;
