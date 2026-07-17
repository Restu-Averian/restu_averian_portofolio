import { Icon } from "@iconify/react";

export default function ProjectCardTagsTech({ tags }) {
  return (
    <div className="mt-2.5 flex flex-wrap gap-1.5">
      {tags?.map((tag, idx) => (
        <span
          key={`${tag?.icon}-${idx}`}
          className="inline-flex items-center gap-1 rounded-md bg-muted/70 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
        >
          <Icon icon={tag?.icon} className="h-3 w-3" />
          {tag?.label}
        </span>
      ))}
    </div>
  );
}
