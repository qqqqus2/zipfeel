import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { X, Check } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "group relative h-[24px] w-[24px] shrink-0 rounded-full border border-[#4D4637] ring-offset-background",
        // Keep RadioGroup item style aligned with Checkbox
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "hover:border-[color:var(--color-point-2)] hover:border-[4px] hover:shadow-[-2px_-2px_4px_0_rgba(151,71,255,0.2),2px_2px_6px_0_rgba(151,71,255,0.4)]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-[#DFE0DF]",
        "data-[state=checked]:border-point-1 data-[state=checked]:bg-point-1 data-[state=checked]:text-primary-foreground",
        className,
      )}
      {...props}
    >
      {/* Disabled state: always show X (regardless of checked) */}
      <span className="pointer-events-none absolute inset-0 hidden items-center justify-center group-disabled:flex">
        <X className="h-4 w-4 text-[#DFE0DF] group-data-[state=checked]:hidden" />
      </span>

      <RadioGroupPrimitive.Indicator className="flex items-center justify-center ">
        <Check className="h-4 w-4 group-data-[state=checked]:group-disabled:text-[#DFE0DF]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
