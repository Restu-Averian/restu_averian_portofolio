import { Icon } from "@iconify/react";
import { memo, useRef, useState } from "react";
import ModalDetailProject from "../modal/detail-project";
import { PROJECTS } from "@/constants";
import { useTranslation } from "@/i18n";

const FEATURED_PROJECT_TITLE = "Package Rich Texteditor";

function ProjectCard({
  title,
  desc,
  descKey,
  descDefault,
  tags,
  thumb,
  githubUrl,
  onClick,
  featured = false,
}) {
  const { t } = useTranslation();
  return (
    <article
      className={`flex flex-col gap-3 rounded-2xl border bg-background/55 p-2.5 shadow-sm transition-all hover:border-porto-btn hover:shadow-md sm:flex-row ${
        featured
          ? "border-porto-btn bg-background/75"
          : "border-porto-border/80"
      }`}
    >
      <button
        type="button"
        className="group relative h-44 w-full overflow-hidden rounded-xl bg-muted text-left sm:h-auto sm:min-h-34 sm:w-[40%] sm:shrink-0"
        onClick={onClick}
        aria-label={`${t("ViewProject", "View Project")}: ${title}`}
      >
        {featured && (
          <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-md bg-porto-btn px-2 py-1 text-[10px] font-bold text-porto-btn-text shadow-sm">
            <Icon icon="solar:star-bold" className="h-3 w-3" />
            {t("FeaturedProjectLabel", "Featured")}
          </span>
        )}
        <img
          src={thumb}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </button>

      <div className="flex min-w-0 flex-1 flex-col">
        <h3
          className={`font-bold leading-tight text-foreground ${
            featured ? "text-base lg:text-lg" : "text-base"
          }`}
        >
          {title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {descKey ? t(descKey, descDefault || desc) : desc}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {tags?.map((tag, idx) => (
            <span
              key={`${tag?.icon}-${idx}`}
              className="inline-flex items-center gap-1 rounded-md bg-muted/70 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              <Icon icon={tag?.icon} className="h-3 w-3" />
              {tag?.label}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2 pt-3">
          <button
            type="button"
            onClick={onClick}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-porto-btn px-3 py-1.5 text-xs font-bold text-porto-btn-text transition-colors hover:bg-porto-btn-hover"
          >
            <Icon icon="mdi:eye" className="h-3.5 w-3.5" />{" "}
            {t("ViewProject", "View Project")}
          </button>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-porto-border px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:bg-muted"
          >
            <Icon icon="mdi:code-tags" className="h-3.5 w-3.5" />{" "}
            {t("SourceCode", "Source Code")}
          </a>
        </div>
      </div>
    </article>
  );
}

const Projects_ = () => {
  const [showModalDetail, setShowModalDetail] = useState(false);
  const detailProjectRef = useRef({});
  const { t } = useTranslation();
  const orderedProjects = [...PROJECTS].sort((a, b) => {
    if (a.title === FEATURED_PROJECT_TITLE) return -1;
    if (b.title === FEATURED_PROJECT_TITLE) return 1;
    return 0;
  });

  return (
    <section className="rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm">
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-accent text-porto-btn">
          <Icon
            icon="solar:stars-minimalistic-bold"
            className="h-4 w-4"
          />
        </span>
        <div>
          <h2 className="text-lg font-bold leading-tight text-foreground">
            {t("FeaturedProjects", "Featured Projects")}
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {t(
              "FeaturedProjectsDesc",
              "Selected public work and technical experiments.",
            )}
          </p>
        </div>
      </div>

      <div className="grid gap-3">
        {orderedProjects.map((project, i) => (
          <ProjectCard
            key={project.id ?? i}
            {...project}
            featured={project.title === FEATURED_PROJECT_TITLE}
            onClick={() => {
              detailProjectRef.current = project;
              setShowModalDetail(true);
            }}
          />
        ))}
      </div>

      <ModalDetailProject
        open={showModalDetail}
        onClose={() => {
          setShowModalDetail(false);
          detailProjectRef.current = {};
        }}
        project={detailProjectRef?.current}
      />
    </section>
  );
};

const Projects = memo(Projects_);
export default Projects;
