import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { cn } from "@/lib/utils";

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
          "ml-1 h-6.5 cursor-pointer rounded-full border border-porto-border bg-card px-2 py-1 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn focus:ring-0 focus-visible:ring-0 focus:outline-none",
          triggerClassName,
        )}
        {...triggerProps}
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
