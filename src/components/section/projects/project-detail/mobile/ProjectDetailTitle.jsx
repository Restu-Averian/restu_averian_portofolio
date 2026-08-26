import { useTranslation } from "@/i18n";

export const ProjectDetailTitle = ({ project }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
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
