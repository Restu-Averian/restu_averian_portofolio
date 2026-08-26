import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

export const CaseTech = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2">
      {(project?.tags ?? []).map((tag, index) => {
        const label = tag?.label?.__i18n
          ? t(tag.label.key, tag.label.default)
          : tag?.label;

        return (
          <span
            key={`${tag?.label}-${index}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-porto-border/70 bg-background/45 px-3 py-1.5 text-[13px] font-medium text-porto-text"
          >
            <Icon icon={tag?.icon} className="h-3.5 w-3.5" />

            {label}
          </span>
        );
      })}
    </div>
  );
};
