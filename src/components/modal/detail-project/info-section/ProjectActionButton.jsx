import { cn } from "@/lib/utils";

export default function ProjectActionButton({
  href,
  icon,
  label,
  variant = "outline",
  disabled = false,
}) {
  const baseClass =
    "flex w-full items-center justify-center gap-3 rounded-full py-3 text-[20px] font-semibold transition-all duration-200";

  const variantClass = {
    outline: disabled
      ? "border-[3px] border-porto-btn/25 bg-porto-btn/8 text-porto-btn/55 cursor-not-allowed opacity-90"
      : "border-[3px] border-porto-btn/70 bg-transparent text-porto-btn hover:bg-porto-btn/8 hover:scale-[1.01] active:scale-[0.99]",
    solid: disabled
      ? "bg-porto-btn/30 text-porto-btn-text/70 cursor-not-allowed opacity-90"
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
