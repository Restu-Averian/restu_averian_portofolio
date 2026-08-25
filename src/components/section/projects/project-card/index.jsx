import { useTranslation } from "@/i18n";
import ProjectCardTagFeatured from "./components/ProjectCardTagFeatured";
import ProjectCardTagsTech from "./components/ProjectCardTagsTech";
import ProjectCardActions from "./components/ProjectCardActions";

export default function ProjectCard({
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
      <ProjectCardTagFeatured
        featured={featured}
        thumb={thumb}
        title={title}
        onClick={onClick}
      />

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

        <ProjectCardTagsTech tags={tags} />

        <ProjectCardActions onClick={onClick} githubUrl={githubUrl} />
      </div>
    </article>
  );
}
