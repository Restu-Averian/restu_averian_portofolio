import { memo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

/**
 * Reusable Tooltip component with customizable trigger and content.
 */
const TooltipCustom_ = ({
  children,
  content,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  className = "bg-transparent",
  classNameArrow = "bg-none rotate-none size-0",
  asChild = true,
  ...props
}) => {
  if (!content) return children;

  return (
    <Tooltip {...props}>
      <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
      <TooltipContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={className}
        classNameArrow={classNameArrow}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

const TooltipCustom = memo(TooltipCustom_);
export default TooltipCustom;
export { TooltipCustom };
