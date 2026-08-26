import { useTranslation } from "@/i18n";

export const ProjectDetailTitle = ({ project }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 overflow-hidden items-center justify-center rounded-xl border border-[#46382d] bg-[#241c18] text-[32px] font-bold leading-none text-[#f5dec2] shadow-sm">
          {project?.logo ? (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="h-full w-full object-cover"
            />
          ) : (
            project?.title?.[0] || "P"
          )}
        </div>

        <h2 className="text-[40px] font-bold leading-none text-porto-text">
          {project?.title}
        </h2>
      </div>

      <p className="text-[16px] leading-snug text-porto-text">
        {project?.desc?.__i18n
          ? t(project.desc.key, project.desc.default)
          : (project?.desc ?? "")}
      </p>
    </>
  );
};
