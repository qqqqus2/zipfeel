import * as React from "react";

import { cn } from "@/lib/utils";

const groupShellClass =
  "flex h-10 w-full items-center gap-2 rounded-md border border-input bg-background px-3 text-base ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2";

const innerInputClass =
  "min-w-0 flex-1 border-0 bg-transparent p-0 text-base shadow-none outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed";

const addonClass = "shrink-0 text-sm font-medium text-foreground select-none";

const invalidInputClass =
  "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/40";

const invalidGroupClass =
  "has-[input[aria-invalid=true]]:border-destructive has-[input[aria-invalid=true]]:focus-within:ring-destructive/40";

const Input = React.forwardRef(
  ({ className, type, prefixLabel, suffixLabel, disabled, ...props }, ref) => {
    const hasAddon =
      (prefixLabel != null && prefixLabel !== "") ||
      (suffixLabel != null && suffixLabel !== "");

    if (!hasAddon) {
      return (
        <input
          type={type}
          disabled={disabled}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            invalidInputClass,
            className,
          )}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <div
        className={cn(
          groupShellClass,
          invalidGroupClass,
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        {prefixLabel ? <span className={addonClass}>{prefixLabel}</span> : null}
        <input
          type={type}
          disabled={disabled}
          className={innerInputClass}
          ref={ref}
          {...props}
        />
        {suffixLabel ? <span className={addonClass}>{suffixLabel}</span> : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
