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
        {project?.descKey ? t(project.descKey, project.desc) : project?.desc}
      </p>
    </>
  );
};
