import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  CalendarDays,
  CircleAlert,
  ExternalLink,
  GitBranch,
  Globe2,
  Home,
  Layers,
  ListChecks,
  Route,
  Target,
  UserCheck,
  Wrench,
  X,
} from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "@/i18n";
import { cn } from "@/lib/utils";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";

const TAB_ICON_CLASS = "h-5 w-5 shrink-0";

const CASE_TABS = [
  { value: "overview", label: "Overview", icon: Home },
  { value: "problem", label: "Problem", icon: CircleAlert },
  { value: "ownership", label: "Ownership", icon: UserCheck },
  { value: "contributions", label: "Contributions", icon: ListChecks },
  { value: "decisions", label: "Engineering Decisions", icon: GitBranch },
  { value: "challenges", label: "Challenges & Solutions", icon: Wrench },
  { value: "outcome", label: "Outcome", icon: Target },
  { value: "tech", label: "Tech Stack", icon: Route },
];

const getProjectMeta = (project) => ({
  launched: project?.title === "Resaeni" ? "19 Aug 2026" : "Completed",
  platform: project?.demoUrl ? "Web" : "Package",
});

const getTabValueFromSectionId = (id = "") => id.split("-")[0];

const CaseSection = ({ icon: IconCmp, id, title, children }) => (
  <section
    id={`case-${id}`}
    data-case-section={id}
    className="scroll-mt-4 rounded-[1.35rem] border border-porto-border/70 bg-porto-surface/65 px-7 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
  >
    <div className="mb-4 flex items-center gap-4 text-porto-text">
      <IconCmp className="h-6 w-6 shrink-0" />
      <h3 className="text-[25px] font-semibold leading-none">{title}</h3>
    </div>
    <div className="space-y-4 text-[15px] leading-[1.8] text-porto-muted">
      {children}
    </div>
  </section>
);

const Paragraphs = ({ items, t }) =>
  (items ?? []).map((item, index) => (
    <p key={item.key ?? index}>{t(item.key, item.defaultText)}</p>
  ));

const PreviewPanel = ({ images = [], title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <aside className="flex min-h-0 flex-col rounded-[1.45rem] border border-porto-border/60 bg-porto-surface/50 p-6">
      <div className="mb-4 flex items-center gap-2 text-[15px] font-medium text-porto-text">
        <Box className="h-4.5 w-4.5 text-porto-btn" />
        Product Preview
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className="overflow-hidden rounded-[1.35rem] bg-background/90 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
          <img
            src={activeImage}
            alt={`${title || "Project"} preview`}
            className="aspect-[1.32/1] w-full rounded-xl object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 3).map((image, index) => {
            const active = activeImage === image;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(image)}
                className={cn(
                  "overflow-hidden rounded-xl border bg-background/80 p-1 transition cursor-pointer",
                  active
                    ? "border-porto-btn shadow-[0_0_0_2px_rgba(210,166,108,0.2)]"
                    : "border-porto-border/60 opacity-65 hover:opacity-100",
                )}
              >
                <img
                  src={image}
                  alt={`${title || "Project"} preview ${index + 1}`}
                  className="aspect-[1.12/0.85] w-full rounded-lg object-cover"
                />
              </button>
            );
          })}

          <div className="flex aspect-[1.12/0.85] items-center justify-center rounded-xl border border-dashed border-porto-btn/50 bg-background/35 text-center text-sm text-porto-muted">
            <span>
              +<br />
              more
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

const TechGrid = ({ tags = [] }) => (
  <div className="flex flex-wrap gap-3">
    {tags.map((tag, index) => (
      <span
        key={`${tag?.label}-${index}`}
        className="inline-flex items-center gap-2 rounded-full border border-porto-border/70 bg-background/50 px-4 py-2 text-sm font-medium text-porto-text"
      >
        <Icon icon={tag?.icon} className="h-4 w-4" />
        {tag?.label}
      </span>
    ))}
  </div>
);

const ProjectLink = ({ href, children, variant = "outline" }) => {
  const disabled = !href;
  const className = cn(
    "inline-flex h-13 min-w-64 items-center justify-center gap-3 rounded-full border text-[17px] font-semibold transition",
    variant === "solid"
      ? "border-porto-btn bg-porto-btn text-porto-btn-text hover:bg-porto-btn-hover"
      : "border-porto-btn bg-transparent text-porto-btn hover:bg-porto-btn/10",
    disabled && "pointer-events-none opacity-50",
  );

  if (disabled) {
    return (
      <button type="button" disabled className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
};

const DesktopDialog_ = () => {
  const {
    showModalDetail: open,
    handleCloseModal: onClose,
    prevProject,
    nextProject,
    goPrev,
    goNext,
    currentProject,
  } = useProjectsContext();
  const { t } = useTranslation();
  const contentRef = useRef(null);
  const projectMeta = getProjectMeta(currentProject);
  const caseStudy = currentProject?.caseStudy;
  const tabs = useMemo(
    () =>
      CASE_TABS.filter(({ value }) => {
        if (value === "tech") return currentProject?.tags?.length;
        if (value === "ownership") return caseStudy?.ownership;
        return caseStudy?.[value]?.length;
      }),
    [caseStudy, currentProject?.tags],
  );

  const defaultTab = tabs[0]?.value || "overview";
  const [activeSection, setActiveSection] = useState(defaultTab);

  useEffect(() => {
    setActiveSection(defaultTab);
    contentRef.current?.scrollTo({ top: 0 });
  }, [defaultTab, currentProject?.id]);

  const syncActiveSection = useCallback(() => {
    const container = contentRef.current;
    if (!container) return;

    const sections = [...container.querySelectorAll("[data-case-section]")];
    if (!sections.length) return;

    const atBottom =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 2;

    const current = atBottom
      ? sections.at(-1)
      : sections.reduce((active, section) => {
          return section.offsetTop <= container.scrollTop + 24
            ? section
            : active;
        }, sections[0]);

    setActiveSection(getTabValueFromSectionId(current.dataset.caseSection));
  }, []);

  const scrollToSection = useCallback((value) => {
    const container = contentRef.current;
    const section = container?.querySelector(`[data-case-section="${value}"]`);

    if (!container || !section) return;

    setActiveSection(value);
    container.scrollTo({
      top: Math.max(section.offsetTop - 16, 0),
      behavior: "smooth",
    });
  }, []);

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose?.()}>
      <DialogContent
        showCloseButton={false}
        className="hidden h-[92vh]! w-[94vw] max-w-[1500px] grid-rows-[auto_minmax(0,1fr)_auto] gap-5 overflow-hidden! rounded-[1.9rem] border border-porto-border/80 bg-porto-bg/95 p-7 shadow-2xl xl:grid"
      >
        <DialogTitle className="sr-only">
          {currentProject?.title || "Detail Project"}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Project screenshots, description, technologies, and links.
        </DialogDescription>

        <header className="grid grid-cols-[1fr_auto] gap-8">
          <div className="flex min-w-0 items-start gap-7">
            <div className="flex h-17 w-17 shrink-0 items-center justify-center rounded-[1rem] border border-porto-btn/50 bg-porto-btn text-[42px] font-bold leading-none text-porto-btn-text shadow-[0_14px_34px_rgba(0,0,0,0.2)]">
              {currentProject?.title?.[0] || "P"}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-7">
                <h2 className="truncate text-[52px] font-bold leading-[0.95] text-porto-text">
                  {currentProject?.title}
                </h2>
                <span className="rounded-full border border-porto-border/60 bg-porto-surface px-5 py-2 text-[15px] font-medium text-porto-text">
                  Case Study
                </span>
              </div>
              <p className="mt-4 max-w-220 text-[15px] leading-relaxed text-porto-text">
                {currentProject?.descKey
                  ? t(currentProject.descKey, currentProject.desc)
                  : currentProject?.desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 pr-16">
            <div className="flex items-start gap-4">
              <CalendarDays className="mt-1 h-5 w-5 text-porto-btn" />
              <div className="space-y-1 text-[15px] text-porto-text">
                <p>Launched</p>
                <p className="font-medium">{projectMeta.launched}</p>
              </div>
            </div>
            <div className="h-16 w-px bg-porto-border/60" />
            <div className="flex items-start gap-4">
              <Layers className="mt-1 h-5 w-5 text-porto-btn" />
              <div className="space-y-1 text-[15px] text-porto-text">
                <p>Platform</p>
                <p className="font-medium">{projectMeta.platform}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-7 right-7 flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-porto-border/80 text-porto-text transition hover:bg-porto-surface"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </header>

        <Tabs
          key={currentProject?.id}
          value={activeSection}
          onValueChange={scrollToSection}
          orientation="vertical"
          className="grid min-h-0 grid-cols-[0.9fr_180px_1fr] gap-5"
        >
          <PreviewPanel
            images={currentProject?.images}
            title={currentProject?.title}
          />

          <TabsList
            variant="line"
            className="h-full w-full justify-start rounded-[1.2rem] border border-porto-border/70 bg-porto-surface/55 p-4"
          >
            {tabs.map(({ value, label, icon: IconCmp }) => (
              <TabsTrigger
                key={value}
                value={value}
                onClick={() => scrollToSection(value)}
                className="h-auto justify-start gap-4 rounded-none border-b border-porto-border/45 px-2 py-4 text-left text-[14px] font-medium normal-case tracking-normal text-porto-text/85 uppercase-none data-[state=active]:text-porto-btn [&:after]:-left-4 [&:after]:right-auto [&:after]:w-0.5 [&:after]:bg-porto-btn data-[state=active]:after:opacity-100"
              >
                <IconCmp className={TAB_ICON_CLASS} />
                <span className="whitespace-normal leading-snug">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div
            ref={contentRef}
            data-case-scroll
            onScroll={syncActiveSection}
            className="min-h-0 space-y-4 overflow-y-auto rounded-[1.45rem] border border-porto-border/70 bg-background/20 p-4 porto-scrollbar"
          >
            {caseStudy?.overview?.length ? (
              <CaseSection id="overview" icon={Home} title="Overview">
                <Paragraphs items={caseStudy?.overview} t={t} />
              </CaseSection>
            ) : null}

            {caseStudy?.problem?.length ? (
              <CaseSection id="problem" icon={CircleAlert} title="Problem">
                <Paragraphs items={caseStudy?.problem} t={t} />
              </CaseSection>
            ) : null}

            {caseStudy?.ownership ? (
              <CaseSection id="ownership" icon={UserCheck} title="Ownership">
                <p>
                  {t(
                    caseStudy?.ownership?.key,
                    caseStudy?.ownership?.defaultText,
                  )}
                </p>
              </CaseSection>
            ) : null}

            {caseStudy?.contributions?.length ? (
              <CaseSection
                id="contributions"
                icon={ListChecks}
                title="Contributions"
              >
                <ul className="space-y-3">
                  {(caseStudy?.contributions ?? []).map((item, index) => (
                    <li key={item.key ?? index} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-porto-btn" />
                      <span>{t(item.key, item.defaultText)}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            ) : null}

            {caseStudy?.decisions?.length
              ? caseStudy.decisions.map((item, index) => (
                  <CaseSection
                    key={item.descKey ?? index}
                    id={index === 0 ? "decisions" : `decisions-${index}`}
                    icon={GitBranch}
                    title={
                      item.titleKey ? t(item.titleKey, item.title) : item.title
                    }
                  >
                    <p>{t(item.descKey, item.defaultDesc)}</p>
                  </CaseSection>
                ))
              : null}

            {caseStudy?.challenges?.length
              ? caseStudy.challenges.map((item, index) => (
                  <CaseSection
                    key={item.challengeKey ?? index}
                    id={index === 0 ? "challenges" : `challenges-${index}`}
                    icon={Wrench}
                    title={`Challenge ${index + 1}`}
                  >
                    <p>
                      <span className="font-semibold text-porto-text">
                        Challenge:
                      </span>{" "}
                      {t(item.challengeKey, item.defaultChallenge)}
                    </p>
                    <p>
                      <span className="font-semibold text-porto-text">
                        Solution:
                      </span>{" "}
                      {t(item.solutionKey, item.defaultSolution)}
                    </p>
                  </CaseSection>
                ))
              : null}

            {caseStudy?.outcome?.length ? (
              <CaseSection id="outcome" icon={Target} title="Outcome">
                <ul className="space-y-3">
                  {(caseStudy?.outcome ?? []).map((item, index) => (
                    <li key={item.key ?? index} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-porto-btn" />
                      <span>{t(item.key, item.defaultText)}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            ) : null}

            {currentProject?.tags?.length ? (
              <CaseSection id="tech" icon={Route} title="Tech Stack">
                <TechGrid tags={currentProject?.tags} />
              </CaseSection>
            ) : null}
          </div>
        </Tabs>

        <footer className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 rounded-[1.35rem] border-t border-porto-border/50 bg-porto-surface/35 px-7 py-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex min-w-0 cursor-pointer items-center gap-4 text-left text-porto-text"
          >
            <ArrowLeft className="h-6 w-6 shrink-0" />
            <span className="min-w-0">
              <span className="block text-sm text-porto-btn">
                Previous Project
              </span>
              <span className="block truncate text-[15px]">
                {prevProject?.title || "Previous Project"}
              </span>
            </span>
          </button>

          <div className="flex items-center gap-6">
            <ProjectLink href={currentProject?.demoUrl}>
              <Globe2 className="h-5 w-5" />
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </ProjectLink>
            <ProjectLink href={currentProject?.githubUrl} variant="solid">
              <Icon icon="mdi:github" className="h-5 w-5" />
              View on GitHub
            </ProjectLink>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="flex min-w-0 cursor-pointer items-center justify-end gap-4 text-right text-porto-text"
          >
            <span className="min-w-0">
              <span className="block text-sm text-porto-btn">Next Project</span>
              <span className="block truncate text-[15px]">
                {nextProject?.title || "Next Project"}
              </span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0" />
          </button>
        </footer>
      </DialogContent>
    </Dialog>
  );
};

const DesktopDialog = memo(DesktopDialog_);
export default DesktopDialog;
