"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverClose = PopoverPrimitive.Close;

const popoverPanelMotionClassName =
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const PopoverContent = React.forwardRef(
  (
    {
      className,
      align = "center",
      sideOffset = 4,
      /** `bubble`: Tooltip과 같은 말풍선(gray-6·화살표·닫기). `panel`: 콤보박스 등 일반 패널 */
      variant = "panel",
      showCloseButton,
      children,
      ...props
    },
    ref,
  ) => {
    const isBubble = variant === "bubble";
    const mergedShowClose = showCloseButton ?? isBubble;

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            "z-50 outline-none",
            popoverPanelMotionClassName,
            isBubble
              ? cn(
                  "relative w-auto max-w-[330px] overflow-visible rounded-md bg-point-3 p-[20px] text-[14px] text-white shadow-md",
                  "origin-[--radix-popover-content-transform-origin]",
                  mergedShowClose,
                )
              : cn(
                  "max-w-[330px] rounded-md bg-point-3 p-4 text-popover-foreground shadow-md",
                  "origin-[--radix-popover-content-transform-origin]",
                ),
            className,
          )}
          {...props}
        >
          {mergedShowClose ? (
            <PopoverPrimitive.Close asChild>
              <button
                type="button"
                className={cn(
                  "absolute right-[20px] top-[20px] inline-flex size-5 items-center justify-center rounded-sm outline-none transition-colors cursor-pointer",
                  isBubble
                    ? "text-black focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-6"
                    : "text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                )}
                aria-label="닫기"
              >
                <X className="w-full h-full" strokeWidth={2} />
              </button>
            </PopoverPrimitive.Close>
          ) : null}
          {children}
          {isBubble ? (
            <PopoverPrimitive.Arrow
              className="fill-point-3"
              width={12}
              height={6}
            />
          ) : null}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  },
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverAnchor, PopoverContent, PopoverClose };
