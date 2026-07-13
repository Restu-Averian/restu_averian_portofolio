import { Icon } from "@iconify/react";
import { memo, useRef, useState } from "react";
import ModalDetailProject from "../modal/detail-project";
import { PROJECTS } from "@/constants";
import ArtShelf from "./ArtShelf";

function ProjectCard({ title, desc, tags, thumb, githubUrl, onClick }) {
  return (
    <div className="shrink-0 w-75 sm:w-100 lg:w-112.5 snap-center">
      <div
        className="flex flex-col sm:flex-row h-full rounded-2xl bg-card p-4 gap-4 border border-porto-border shadow-sm cursor-pointer"
        onClick={onClick}
      >
        {/* Left: Image (or top on mobile) */}
        <div className="w-full sm:w-2/5 h-40 sm:h-auto overflow-hidden rounded-xl bg-muted shrink-0">
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col flex-1">
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-3">
            {desc}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags?.map((tag, idx) => (
              <span
                key={`${tag?.icon}-${idx}`}
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-foreground"
              >
                <Icon icon={tag?.icon} className="h-3 w-3" />
                {tag?.label}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 flex gap-2">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-1 bg-porto-btn text-porto-btn-text rounded-full py-1.5 text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <Icon icon="mdi:eye" className="w-3 h-3" /> View Project
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1 border border-porto-border rounded-full py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Icon icon="mdi:code-tags" className="w-3 h-3" /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Projects_ = () => {
  const [showModalDetail, setShowModalDetail] = useState(false);
  const detailProjectRef = useRef({});
  const featuredScrollRef = useRef(null);

  const scroll = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col gap-6">
      {/* Featured Projects */}
      <div className="bg-background rounded-3xl p-6 relative">
        <div className="flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3 mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Icon
              icon="solar:stars-minimalistic-bold"
              className="text-yellow-400 h-5 w-5"
            />
            Featured Projects
          </h2>
          <span className="text-xs text-muted-foreground">
            Selected public work and technical experiments.
          </span>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll(featuredScrollRef, "left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-popover/90 backdrop-blur-sm border border-porto-border shadow-sm text-foreground hover:border-porto-btn hover:text-porto-btn transition-all active:scale-95 cursor-pointer"
        >
          <Icon icon="lucide:chevron-left" />
        </button>
        <button
          onClick={() => scroll(featuredScrollRef, "right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-popover/90 backdrop-blur-sm border border-porto-border shadow-sm text-foreground hover:border-porto-btn hover:text-porto-btn transition-all active:scale-95 cursor-pointer"
        >
          <Icon icon="lucide:chevron-right" />
        </button>

        <div
          ref={featuredScrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id ?? i}
              {...project}
              onClick={() => {
                detailProjectRef.current = project;
                setShowModalDetail(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Art Shelf */}
      <ArtShelf />

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
