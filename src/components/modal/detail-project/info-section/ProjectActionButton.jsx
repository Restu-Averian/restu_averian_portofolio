import { cn } from "@/lib/utils";

export default function ProjectActionButton({
  href,
  icon,
  label,
  variant = "outline",
  disabled = false,
}) {
  const baseClass =
    "flex w-full items-center justify-center gap-3 rounded-full py-3 text-[20px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-porto-bg";

  const variantClass = {
    outline: disabled
      ? "border-[3px] border-porto-border bg-muted text-muted-foreground cursor-not-allowed opacity-80"
      : "border-[3px] border-porto-border bg-transparent text-porto-text hover:border-porto-btn hover:bg-porto-accent/40 hover:text-porto-btn active:scale-[0.99]",
    solid: disabled
      ? "bg-muted text-muted-foreground cursor-not-allowed opacity-80"
      : "bg-porto-btn text-porto-btn-text hover:bg-porto-btn-hover active:scale-[0.99]",
  };

  if (disabled || !href) {
    return (
      <button
        type="button"
        disabled
        className={cn(baseClass, variantClass[variant])}
      >
        {icon}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(baseClass, variantClass[variant])}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
