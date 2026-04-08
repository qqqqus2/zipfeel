"use client";

import * as React from "react";
import { AlertCircle, CheckCircle, Info, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";

const helpTextVariants = {
  default: {
    Icon: Info,
    className: "text-gray-6",
  },
  primary: {
    Icon: Info,
    className: "text-point-2",
  },
  positive: {
    Icon: CheckCircle,
    className: "text-point-2",
  },
  negative: {
    Icon: AlertCircle,
    className: "text-sub-1",
  },
  info: {
    Icon: Lightbulb,
    className: "text-sub-8",
  },
};

const HelpText = React.forwardRef(
  (
    { variant = "default", icon: iconProp, children, className, ...props },
    ref,
  ) => {
    const v = helpTextVariants[variant] || helpTextVariants.default;
    const Icon = v.Icon;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 text-sm",
          v.className,
          className,
        )}
        {...props}
      >
        {iconProp === null ? null : iconProp ? (
          iconProp
        ) : (
          <Icon className="h-4 w-4 shrink-0" />
        )}
        <span className="min-w-0">{children}</span>
      </div>
    );
  },
);
HelpText.displayName = "HelpText";

export { HelpText, helpTextVariants };
