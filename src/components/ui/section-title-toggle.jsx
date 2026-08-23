"use client";

import * as React from "react";
import { Checkbox } from "./checkbox";

import { cn } from "@/lib/utils";

function SectionToggleIcon({ expanded }) {
    return (
        <span className="relative flex w-[20px] h-[10px] items-center justify-center">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-foreground"></span>
            <span
                className={[
                    "absolute left-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] border-2 z-1 rotate-45 bg-white transition-transform duration-150 ease-out",
                    expanded ? "translate-x-[10px]" : "translate-x-0",
                ].join(" ")}
            ></span>
        </span>
    );
}

export function SectionTitleToggle({
    title,
    requiredLabel = "설정 필수",
    expanded,
    defaultExpanded = false,
    onExpandedChange,
    requiredChecked,
    defaultRequiredChecked = false,
    onRequiredCheckedChange,
    disabled,
    className,
}) {
    const isRequiredControlled = requiredChecked !== undefined;
    const [requiredUncontrolled, setRequiredUncontrolled] = React.useState(
        defaultRequiredChecked,
    );
    const isRequired = isRequiredControlled
        ? requiredChecked
        : requiredUncontrolled;

    const isExpandedControlled = expanded !== undefined;
    const [expandedUncontrolled, setExpandedUncontrolled] =
        React.useState(defaultExpanded);

    const isExpanded = isExpandedControlled ? expanded : expandedUncontrolled;

    const toggleExpanded = () => {
        const next = !isExpanded;
        onExpandedChange?.(next);
        if (!isExpandedControlled) setExpandedUncontrolled(next);
    };

    const setRequired = (next) => {
        onRequiredCheckedChange?.(next);
        if (!isRequiredControlled) setRequiredUncontrolled(next);
    };

    return (
        <div
            className={cn(
                "flex w-full items-center justify-between gap-4 py-2",
                className,
            )}
        >
            <button
                type="button"
                onClick={toggleExpanded}
                disabled={disabled}
                className={cn(
                    "flex min-w-0 flex-1 items-center gap-3 text-left disabled:opacity-50",
                    !isExpanded && "opacity-50",
                )}
                aria-expanded={isExpanded}
                aria-label={`${title} ${isExpanded ? "접기" : "펼치기"}`}
            >
                <span className="shrink-0">
                    <SectionToggleIcon expanded={isExpanded} />
                </span>
                <span className="truncate text-sm font-semibold text-gray-6">
                    {title}
                </span>
            </button>

            <div className="flex shrink-0 items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                    {requiredLabel}
                </span>
                <Checkbox
                    checked={isRequired}
                    defaultChecked={defaultRequiredChecked}
                    onCheckedChange={(v) => setRequired(v === true)}
                    disabled={disabled}
                    aria-label={`${title} ${requiredLabel}`}
                />
            </div>
        </div>
    );
}
