import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, fixed = false, ...props }, ref) => {
    const isFixed = fixed;

    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                "group peer inline-flex shrink-0 items-center justify-center rounded-sm border-0 bg-transparent p-0 ring-offset-background",
                !isFixed && "cursor-pointer",
                !isFixed && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isFixed && "cursor-not-allowed",
                "aria-invalid:ring-destructive/40 aria-invalid:[&>span]:border-destructive",
                className,
            )}
            disabled={isFixed ? true : props.disabled}
            data-fixed={isFixed ? "true" : undefined}
            {...props}
        >
            <span
                className={cn(
                    "relative flex size-6 shrink-0 items-center justify-center rounded-sm border border-[#4D4637]",
                    !isFixed && "group-hover:border-[color:var(--color-point-2)] group-hover:border-[4px] group-hover:shadow-[-2px_-2px_4px_0_rgba(151,71,255,0.2),2px_2px_6px_0_rgba(151,71,255,0.4)]",
                    !isFixed && "group-disabled:text-white group-disabled:border-[rgba(172,167,203,1)] group-disabled:bg-white group-data-[state=checked]:group-disabled:bg-[rgba(172,167,203,1)] group-data-[state=checked]:group-disabled:border-[rgba(172,167,203,1)]",
                    !isFixed && "group-data-[state=checked]:text-point-1 group-data-[state=checked]:shadow-none group-data-[state=checked]:border-point-1 group-data-[state=checked]:bg-point-1 group-data-[state=checked]:text-primary-foreground",
                    isFixed && "border-[rgba(172,167,203,1)] bg-[rgba(172,167,203,1)] text-white",
                )}
            >
                {/* Disabled state: hide icon for unchecked disabled state (white background) */}

                <CheckboxPrimitive.Indicator
                    className={cn(
                        "flex items-center justify-center text-current",
                        isFixed && "text-white"
                    )}
                >
                    <Check className={cn(
                        "h-4 w-4",
                        !isFixed && "group-data-[state=checked]:group-disabled:text-white"
                    )} />
                </CheckboxPrimitive.Indicator>
            </span>
        </CheckboxPrimitive.Root>
    );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
