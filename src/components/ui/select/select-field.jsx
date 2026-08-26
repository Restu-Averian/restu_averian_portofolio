import { memo, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";
import DrawerWrapper from "@/components/ui/drawer/drawer-wrapper";
import { ChevronDown, Check } from "lucide-react";

/**
 * Reusable Select Field component built on top of shadcn Select primitives.
 */
const SelectField_ = ({
  value,
  onValueChange,
  open,
  onOpenChange,
  triggerProps = {},
  triggerClassName,
  contentPosition = "popper",
  contentAlign = "end",
  onPointerDownOutside,
  contentClassName,
  items = [],
  renderItem,
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  const handlePointerDown = (e) => {
    // Desktop fix: allow immediate opening of another select
    if (!isMobile) {
      if (!open) {
        onOpenChange?.(true);
      }
    }
    triggerProps.onPointerDown?.(e);
  };

  const selectedItem = useMemo(() => {
    return items.find(
      (item) => (typeof item === "object" ? item.value : item) === value,
    );
  }, [items, value]);

  const triggerContent = useMemo(() => {
    if (!selectedItem) return <SelectValue />;
    return renderItem
      ? renderItem(selectedItem)
      : typeof selectedItem === "object"
        ? selectedItem.label
        : selectedItem;
  }, [selectedItem, renderItem]);

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          className={cn(
            "pointer-events-auto ml-1 h-8 cursor-pointer rounded-full border border-porto-border bg-card px-3 py-1.5 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn focus:ring-0 focus-visible:ring-0 focus:outline-none flex w-fit items-center justify-between gap-1.5 text-sm",
            triggerClassName,
          )}
          {...triggerProps}
          onClick={(e) => {
            onOpenChange?.(!open);
            triggerProps.onClick?.(e);
          }}
        >
          {triggerContent}
          <ChevronDown className="pointer-events-none size-3.5 text-muted-foreground" />
        </button>

        <DrawerWrapper
          open={open}
          onOpenChange={onOpenChange}
          placement="bottom"
          contentClassName={cn("px-4 pb-4 pt-2 min-h-[35vh]", contentClassName)}
          dismissible
        >
          <div className="flex flex-col gap-2 mt-4">
            {children ??
              items.map((item, index) => {
                const itemValue = typeof item === "object" ? item.value : item;
                const itemKey =
                  typeof item === "object" ? (item.key ?? item.value) : index;
                const isSelected = itemValue === value;
                return (
                  <button
                    key={itemKey}
                    type="button"
                    className={cn(
                      "cursor-pointer flex w-full items-center justify-between rounded-lg px-4 py-4 text-base font-medium transition-colors",
                      "[&_span]:text-base! [&_svg]:h-5! [&_svg]:w-5!",
                      isSelected
                        ? "bg-porto-btn/10 text-porto-btn"
                        : "text-foreground hover:bg-muted",
                    )}
                    onClick={() => {
                      onValueChange?.(itemValue);
                      onOpenChange?.(false);
                    }}
                  >
                    <span>
                      {renderItem
                        ? renderItem(item)
                        : typeof item === "object"
                          ? item.label
                          : item}
                    </span>
                    {isSelected && <Check className="h-5 w-5" />}
                  </button>
                );
              })}
          </div>
        </DrawerWrapper>
      </>
    );
  }

  return (
    <Select
      value={value}
      open={open}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
      {...props}
    >
      <SelectTrigger
        className={cn(
          "pointer-events-auto ml-1 h-6.5 cursor-pointer rounded-full border border-porto-border bg-card px-2 py-1 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn focus:ring-0 focus-visible:ring-0 focus:outline-none",
          triggerClassName,
        )}
        {...triggerProps}
        onPointerDown={handlePointerDown}
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent
        position={contentPosition}
        align={contentAlign}
        onPointerDownOutside={onPointerDownOutside}
        className={contentClassName}
      >
        {children ??
          items.map((item, index) => {
            const itemValue = typeof item === "object" ? item.value : item;
            const itemKey =
              typeof item === "object" ? (item.key ?? item.value) : index;
            return (
              <SelectItem key={itemKey} value={itemValue}>
                {renderItem
                  ? renderItem(item)
                  : typeof item === "object"
                    ? item.label
                    : item}
              </SelectItem>
            );
          })}
      </SelectContent>
    </Select>
  );
};

const SelectField = memo(SelectField_);
export default SelectField;
export { SelectField };
