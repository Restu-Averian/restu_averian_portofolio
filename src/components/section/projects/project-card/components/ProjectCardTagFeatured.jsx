import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

export default function ProjectCardTagFeatured({
  featured,
  thumb,
  title,
  onClick,
}) {
  const { t } = useTranslation();
  return (
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
  );
}
