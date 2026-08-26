import { cn } from "@/lib/utils";

export const ProjectDetailTabs = ({
  availableTabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="grid grid-cols-5 overflow-hidden bg-porto-surface/40">
      {availableTabs.map(({ value, label, icon: IconCmp }) => {
        const active = activeTab === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setActiveTab(value)}
            className={cn(
              "flex min-h-19 flex-col items-center justify-center gap-1.5 px-1 py-2 text-[11px] font-medium leading-tight text-porto-text/80 transition",
              active &&
                "bg-porto-btn/18 text-porto-btn shadow-[inset_0_0_0_1px_rgba(210,166,108,0.28)]",
            )}
          >
            <IconCmp className="h-5 w-5" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
