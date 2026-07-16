import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

export default function ProjectsTitle() {
  const { t } = useTranslation();
  return (
    <>
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-accent text-porto-btn">
        <Icon icon="solar:stars-minimalistic-bold" className="h-4 w-4" />
      </span>
      <div>
        <h2 className="text-lg font-bold leading-tight text-foreground">
          {t("FeaturedProjects", "Featured Projects")}
        </h2>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {t(
            "FeaturedProjectsDesc",
            "Selected public work and technical experiments."
          )}
        </p>
      </div>
    </>
  );
}
