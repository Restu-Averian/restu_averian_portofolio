import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const TAB_ICON_CLASS = "h-5 w-5 shrink-0";

export const ProjectDetailTabs = ({ tabs, scrollToSection }) => {
  return (
    <TabsList
      variant="line"
      className="h-full w-full justify-start rounded-[1.2rem] border border-porto-border/70 bg-porto-surface/55 p-4"
    >
      {tabs.map(({ value, label, icon: IconCmp }) => (
        <TabsTrigger
          key={value}
          value={value}
          onClick={() => scrollToSection(value)}
          className="h-auto justify-start gap-4 rounded-none border-b border-porto-border/45 px-2 py-4 text-left text-[14px] font-medium normal-case tracking-normal text-porto-text/85 uppercase-none data-[state=active]:text-porto-btn [&:after]:-left-4 [&:after]:right-auto [&:after]:w-0.5 [&:after]:bg-porto-btn data-[state=active]:after:opacity-100"
        >
          <IconCmp className={TAB_ICON_CLASS} />
          <span className="whitespace-normal leading-snug">{label}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
