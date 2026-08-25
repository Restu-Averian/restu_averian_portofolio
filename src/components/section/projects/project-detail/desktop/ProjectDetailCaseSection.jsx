export const ProjectDetailCaseSection = ({
  icon: IconCmp,
  id,
  title,
  children,
}) => (
  <section
    id={`case-${id}`}
    data-case-section={id}
    className="scroll-mt-4 rounded-[1.35rem] border border-porto-border/70 bg-porto-surface/65 px-7 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
  >
    <div className="mb-4 flex items-center gap-4 text-porto-text">
      <IconCmp className="h-6 w-6 shrink-0" />

      <h3 className="text-[25px] font-semibold leading-none">{title}</h3>
    </div>
    <div className="space-y-4 text-[15px] leading-[1.8] text-porto-muted">
      {children}
    </div>
  </section>
);
