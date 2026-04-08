import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group peer inline-flex size-11 shrink-0 items-center justify-center rounded-sm border-0 bg-transparent p-0 ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "aria-invalid:ring-destructive/40 aria-invalid:[&>span]:border-destructive",
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        "relative flex size-6 shrink-0 items-center justify-center rounded-sm border border-[#4D4637]",
        "group-hover:border-[color:var(--color-point-2)] group-hover:border-[4px] group-hover:shadow-[-2px_-2px_4px_0_rgba(151,71,255,0.2),2px_2px_6px_0_rgba(151,71,255,0.4)]",
        "group-disabled:text-[#DFE0DF] group-disabled:border-[#DFE0DF] group-disabled:bg-transparent group-data-[state=checked]:group-disabled:bg-[#fff] group-data-[state=checked]:group-disabled:border-[#DFE0DF]",
        "group-data-[state=checked]:text-point-1 group-data-[state=checked]:shadow-none group-data-[state=checked]:border-point-1 group-data-[state=checked]:bg-point-1 group-data-[state=checked]:text-primary-foreground",
      )}
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
    </span>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
