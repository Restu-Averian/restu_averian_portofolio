import { Icon } from "@iconify/react";

export const CaseTech = ({ project }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {(project?.tags ?? []).map((tag, index) => (
        <span
          key={`${tag?.label}-${index}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-porto-border/70 bg-background/45 px-3 py-1.5 text-[13px] font-medium text-porto-text"
        >
          <Icon icon={tag?.icon} className="h-3.5 w-3.5" />
          {tag?.label}
        </span>
      ))}
    </div>
  );
};
