import { memo } from "react";
import { Drawer, DrawerContent, DrawerTitle } from "./drawer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reusable Drawer Wrapper component built on top of shadcn Drawer primitives.
 * @param {{
 *   open: boolean,
 *   onOpenChange: (open: boolean) => void,
 *   placement?: "bottom" | "top" | "left" | "right",
 *   title?: string,
 *   contentClassName?: string,
 *   showCloseButton?: boolean,
 *   children: React.ReactNode
 * }} props
 */
const DrawerWrapper_ = ({
  open,
  onOpenChange,
  placement = "bottom",
  title,
  contentClassName,
  showCloseButton = true,
  children,
  ...props
}) => {
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      direction={placement}
      {...props}
    >
      <DrawerContent
        className={cn(
          "max-h-[96dvh] rounded-t-4xl border-none bg-porto-bg flex flex-col focus:outline-none",
          contentClassName,
        )}
      >
        {title && <DrawerTitle className="sr-only">{title}</DrawerTitle>}

        {showCloseButton && (
          <button
            aria-label="Close"
            onClick={() => onOpenChange?.(false)}
            className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-porto-border bg-transparent text-porto-text hover:bg-black/5 hover:text-porto-btn transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {children}
      </DrawerContent>
    </Drawer>
  );
};

export const DrawerWrapper = memo(DrawerWrapper_);
export default DrawerWrapper;
