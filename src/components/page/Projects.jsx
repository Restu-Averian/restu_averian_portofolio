import { Icon } from "@iconify/react";
import { memo, useRef, useState } from "react";
import ModalDetailProject from "../modal/detail-project";
import { PROJECTS } from "@/constants";

function ProjectCard({ title, desc, tags, thumb, onClick }) {
  return (
    <li
      className="
        flex flex-col
        rounded-xl
        border-[6px]
        p-4
        shadow-sm
        transition-all
        hover:-translate-y-0.5
        hover:shadow-md
        bg-background
        cursor-pointer
      "
      onClick={onClick}
    >
      <div className="flex items-center gap-4 flex-wrap">
        <div className=" rounded-xl sm:rounded-3xl bg-[#E5D0BD] p-3 sm:p-3">
          <div className="shrink-0 overflow-hidden w-16 h-16 sm:w-21 sm:h-20 rounded-xl sm:rounded-3xl">
            <img
              src={thumb}
              alt={`${title} preview`}
              loading="lazy"
              className="h-full w-full object-cover rounded-xl sm:rounded-3xl"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="flex-1 pt-1 text-xl font-semibold leading-snug text-foreground">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, idx) => (
          <span
            key={`${tag?.icon}-${idx}`}
            className="
              inline-flex items-center gap-1.5
              rounded-full
              border border-porto-border
              bg-(--tags)
              px-3 py-1
              text-xs font-medium
              text-foreground
            "
          >
            <Icon icon={tag?.icon} className="h-4 w-4" />
            {tag?.label}
          </span>
        ))}
      </div>
    </li>
  );
}

const Projects_ = () => {
  const [showModalDetail, setShowModalDetail] = useState(false);

  const detailProjectRef = useRef({});

  return (
    <section className="order-1 lg:order-2">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-foreground">
        <Icon icon="ri:sparkling-line" width="36" height="36" />
        Project
      </h2>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id ?? i}
            {...project}
            onClick={() => {
              detailProjectRef.current = project;
              // setSelectedProject(project);
              setShowModalDetail(true);
            }}
          />
        ))}
      </ul>

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
