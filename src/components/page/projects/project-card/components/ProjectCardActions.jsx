import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

export default function ProjectCardActions({ onClick, githubUrl }) {
  const { t } = useTranslation();
  return (
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
  );
}
