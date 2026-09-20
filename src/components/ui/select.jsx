import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Radix Select.Root. `required`는 트리거에 `aria-required`를 주고,
 * 폼 제출용 숨김 native select에도 전달됩니다.
 */
const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(
    ({ className, children, innerLabel, required, ...props }, ref) => {
        return (
            <SelectPrimitive.Trigger
                ref={ref}
                className={cn(
                    "group flex h-10 w-full items-center justify-start gap-[10px] rounded-md border border-input bg-background px-3 py-2 text-base font-medium ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed [&>span]:line-clamp-1",
                    "aria-invalid:border-[2px] aria-invalid:border-dashed aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:focus:ring-destructive/40",
                    "data-[state=open]:bg-[#DFD7D5] data-[state=open]:border-[2px] data-[state=open]:border-[#4F378A]",
                    "hover:border-[2px] hover:border-[#4F378A]",
                    "disabled:border-[#D9D9D9] disabled:text-[#D9D9D9]",
                    className,
                )}
                {...props}
            >
                {innerLabel && (
                    <span className="shrink-0 text-sm font-medium text-gray-6 group-hover:text-[#8557FF] group-aria-[invalid=true]:text-destructive group-disabled:text-[#D9D9D9] transition-colors">
                        {innerLabel}
                        {required && (
                            <span className="ml-0.5 group-hover:text-[#8557FF] group-aria-[invalid=true]:text-destructive group-disabled:text-[#D9D9D9]">
                                *
                            </span>
                        )}
                    </span>
                )}
                <div className="flex-1 flex items-center justify-between gap-2">
                    {children}
                    <SelectPrimitive.Icon asChild>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0 transition-transform data-[state=open]:rotate-180"
                        >
                            <mask id="mask0_select" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                <rect width="20" height="20" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_select)">
                                <path
                                    d="M10.0019 13.4394L4.625 8.06248L6.06437 6.62311L10.0019 10.5606L13.9394 6.62311L15.3788 8.06248L10.0019 13.4394Z"
                                    className="fill-[#474554] group-aria-[invalid=true]:fill-destructive group-disabled:fill-[#D9D9D9]"
                                />
                            </g>
                        </svg>
                    </SelectPrimitive.Icon>
                </div>
            </SelectPrimitive.Trigger>
        );
    },
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(
    ({ className, ...props }, ref) => (
        <SelectPrimitive.ScrollUpButton
            ref={ref}
            className={cn(
                "flex cursor-default items-center justify-center py-1",
                className,
            )}
            {...props}
        >
            <img
                src="/icon/ico_combobox.svg"
                alt=""
                width={20}
                height={20}
                className="shrink-0 rotate-180"
            />
        </SelectPrimitive.ScrollUpButton>
    ),
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(
    ({ className, ...props }, ref) => (
        <SelectPrimitive.ScrollDownButton
            ref={ref}
            className={cn(
                "flex cursor-default items-center justify-center py-1",
                className,
            )}
            {...props}
        >
            <img
                src="/icon/ico_combobox.svg"
                alt=""
                width={20}
                height={20}
                className="shrink-0"
            />
        </SelectPrimitive.ScrollDownButton>
    ),
);
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef(
    ({ className, children, position = "popper", ...props }, ref) => (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={cn(
                    "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border-[2px] border-[#4F378A] bg-[#DFD7D5] text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    position === "popper" &&
                        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                    className,
                )}
                position={position}
                {...props}
            >
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-1",
                        position === "popper" &&
                            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    ),
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
        {...props}
    />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <SelectPrimitive.Item
            ref={ref}
            className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-[38px] pr-2 text-base font-light outline-none data-[disabled]:pointer-events-none data-[disabled]:text-[#D9D9D9]",
                "aria-[invalid=true]:text-destructive",
                className,
            )}
            {...props}
        >
            <span className="absolute left-2 flex size-6 shrink-0 items-center justify-center rounded-sm border border-[#4D4637] aria-[invalid=true]:border-destructive data-[disabled]:border-[#D9D9D9]">
                <SelectPrimitive.ItemIndicator className="flex items-center justify-center text-point-1">
                    <Check className="h-4 w-4" />
                </SelectPrimitive.ItemIndicator>
            </span>

            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    ),
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-muted", className)}
        {...props}
    />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
};
