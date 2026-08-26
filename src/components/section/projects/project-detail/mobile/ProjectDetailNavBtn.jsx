import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/constants/projects";

export const ProjectDetailNavBtn = ({
  goPrev,
  goNext,
  prevProject,
  nextProject,
  currentIndex,
}) => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <button
        type="button"
        onClick={goPrev}
        className="flex min-w-0 items-center justify-center gap-2 rounded-full border border-porto-border/80 px-4 py-2.5 text-sm font-medium text-porto-text transition hover:border-porto-btn hover:text-porto-btn active:scale-95"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" />
        <span className="truncate">{prevProject?.title}</span>
      </button>

      <span className="text-sm font-medium text-porto-text">
        {currentIndex + 1} / {PROJECTS.length}
      </span>

      <button
        type="button"
        onClick={goNext}
        className="flex min-w-0 items-center justify-center gap-2 rounded-full border border-porto-border/80 px-4 py-2.5 text-sm font-medium text-porto-text transition hover:border-porto-btn hover:text-porto-btn active:scale-95"
      >
        <span className="truncate">{nextProject?.title}</span>
        <ArrowRight className="h-4 w-4 shrink-0" />
      </button>
    </div>
  );
};
