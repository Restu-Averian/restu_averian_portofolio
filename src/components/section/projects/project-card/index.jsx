import { useTranslation } from "@/i18n";
import {
  FEATURED_PROJECT_TITLE,
  useProjectsContext,
} from "@/context/ProjectsCtxProvider";
import ProjectCardTagFeatured from "./components/ProjectCardTagFeatured";

export default function ProjectCard({ project }) {
  const { t } = useTranslation();
  const { handleSelectProject } = useProjectsContext();

  const isFeatured = project?.title === FEATURED_PROJECT_TITLE;

  return (
    <article
      className={`flex flex-col gap-3 rounded-2xl border bg-background/55 p-2.5 shadow-sm transition-all hover:border-porto-btn hover:shadow-md sm:flex-row cursor-pointer ${
        isFeatured
          ? "border-porto-btn bg-background/75"
          : "border-porto-border/80"
      }`}
      onClick={() => handleSelectProject(project)}
    >
      <button
        type="button"
        className="group relative h-44 w-full overflow-hidden rounded-xl bg-muted text-left sm:h-auto sm:min-h-34 sm:w-[40%] sm:shrink-0"
        aria-label={`${t("ViewProject", "View Project")}: ${project?.title}`}
      >
        <ProjectCardTagFeatured isFeatured={isFeatured} />

        <img
          src={project?.thumb}
          alt={project?.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </button>

      <div className="flex min-w-0 flex-1 flex-col">
        <h3
          className={`font-bold leading-tight text-foreground ${
            isFeatured ? "text-base lg:text-lg" : "text-base"
          }`}
        >
          {project?.title}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {project?.desc?.__i18n
            ? t(project.desc.key, project.desc.default)
            : (project?.desc ?? "")}
        </p>
      </div>
    </article>
  );
}
