import * as React from "react";
import { cn } from "@/lib/utils";

const chipsVariants = {
    point: "border-point-2 text-point-2",
    white: "border-white text-white",
    orange: "border-sub-8 text-sub-8",
};

const Chips = React.forwardRef(
    ({ className, variant = "point", children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center h-[30px] px-5 text-xs font-normal rounded-full border",
                    chipsVariants[variant],
                    className,
                )}
                {...props}
            >
                {children}
            </span>
        );
    },
);

Chips.displayName = "Chips";

export { Chips };
