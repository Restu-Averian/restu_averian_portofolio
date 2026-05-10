import { Icon } from "@iconify/react";
import { Home } from "lucide-react";
import { memo, useState } from "react";
import ModalDetailProject from "../modal/detail-project";

const THUMB =
  "https://i.pinimg.com/236x/f7/9e/52/f79e5203f41bdaaf1a5b4176f98a8736.jpg";

const THUMB2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOc1D7KFRX9rRA9RMJzPZGs8sCcF-8Zw0k3w&s";

export const PROJECTS = [
  {
    title: "Package Rich Texteditor",
    desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
    tags: ["React", "Tiptap", "Shadcn-ui"],
    demoUrl: "#",
    githubUrl: "#",
    thumb: THUMB,
    images: [THUMB2, THUMB, THUMB],
  },
  {
    title: "Daily Planner",
    desc: "A highly interactive daily planner designed for optimal task organization,",
    tags: ["React", "Shadcn-ui"],
    thumb: THUMB,
    images: [THUMB, THUMB, THUMB],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Optimized Transfer ANTD",
    desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
    tags: ["React", "Ant Design"],
    thumb: THUMB,
    images: [THUMB, THUMB, THUMB],
    demoUrl: "#",
    githubUrl: "#",
  },
];

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
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              inline-flex items-center gap-1.5
              rounded-full
              border border-porto-border
              bg-(--tags)
              px-3 py-1
              text-xs font-medium
              text-muted-foreground
            "
          >
            <Home className="h-3 w-3 shrink-0 text-porto-btn" />
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
}

const Projects_ = () => {
  const [showModalDetail, setShowModalDetail] = useState(false);

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
        }}
        project={{
          title: "Package Rich Texteditor",
          desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
          tags: ["React", "Tiptap", "Shadcn-ui"],
          thumb: THUMB,
          stickerUrl: THUMB,
        }}
      />
    </section>
  );
};

const Projects = memo(Projects_);
export default Projects;
