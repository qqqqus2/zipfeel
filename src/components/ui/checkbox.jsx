import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group peer relative h-[24px] w-[24px] shrink-0 rounded-sm border border-[#4D4637] ring-offset-background",
      // inner + outer shadows
      // "border-[color:rgba(240,240,243,1)] bg-[rgba(240,240,243,1)]",
      // "shadow-[inset_1px_1px_1px_0_rgba(174,174,192,0.15),inset_-1px_-1px_1px_0_rgba(255,255,255,0.7),1.5px_1.5px_3px_0_rgba(174,174,192,0.4),-1px_-1px_3px_0_rgba(255,255,255,1)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "hover:border-[color:var(--color-point-2)] hover:border-[4px] hover:shadow-[-2px_-2px_4px_0_rgba(151,71,255,0.2),2px_2px_6px_0_rgba(151,71,255,0.4)]",
      "disabled:text-[#DFE0DF] disabled:border-[#DFE0DF] disabled:bg-transparent data-[state=checked]:disabled:bg-[#fff] data-[state=checked]:disabled:border-[#DFE0DF]",
      "data-[state=checked]:text-point-1 data-[state=checked]:shadow-none data-[state=checked]:border-point-1 data-[state=checked]:bg-point-1 data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    {/* Disabled state: always show X (regardless of checked) */}
    <span className="pointer-events-none absolute inset-0 hidden items-center justify-center group-disabled:flex">
      <X className="h-4 w-4 text-[#DFE0DF] group-data-[state=checked]:hidden" />
    </span>

    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4 group-data-[state=checked]:group-disabled:text-[#DFE0DF]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
