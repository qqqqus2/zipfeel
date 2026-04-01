"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef(
  ({ className, children, showCloseButton = true, ...props }, ref) => (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          "relative fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xs translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-[20px] pt-10 shadow-lg duration-200",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
          "data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2",
          "data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          !showCloseButton && "pt-[20px]",
          className,
        )}
        {...props}
      >
        {showCloseButton ? (
          <AlertDialogPrimitive.Cancel asChild>
            <button
              type="button"
              className={cn(
                "absolute right-4 top-4 z-10 rounded-sm text-foreground opacity-70 ring-offset-background transition-opacity",
                "hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
              aria-label="닫기"
            >
              <X className="size-4" strokeWidth={2} />
            </button>
          </AlertDialogPrimitive.Cancel>
        ) : null}
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  ),
);
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col gap-4 space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex w-full flex-col-reverse gap-[10px] sm:flex-row sm:items-stretch sm:justify-start sm:gap-[10px]",
      className,
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  ),
);
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

/** fill: point1 · outline: oulinePoint1 · destructiveOutline: 빨간 테두리(위험 확인) · default: shadcn 기본 */
const AlertDialogAction = React.forwardRef(
  ({ className, variant = "fill", ...props }, ref) => {
    const isFillLike = variant === "fill" || variant === "default";
    const isOutlineLike =
      variant === "outline" || variant === "destructiveOutline";

    return (
      <AlertDialogPrimitive.Action
        ref={ref}
        className={cn(
          variant === "fill" && buttonVariants({ variant: "point1" }),
          variant === "outline" &&
            cn(buttonVariants({ variant: "oulinePoint1" }), "shadow-sm"),
          variant === "destructiveOutline" &&
            cn(
              buttonVariants({ variant: "outline" }),
              "shadow-sm border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive",
            ),
          variant === "default" && buttonVariants(),
          "w-full min-w-0 justify-center",
          isFillLike && "sm:flex-1",
          isOutlineLike && "sm:w-auto sm:shrink-0 sm:flex-none",
          className,
        )}
        {...props}
      />
    );
  },
);
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

/** outline: oulinePoint1(기본) · default: shadcn 회색 outline */
const AlertDialogCancel = React.forwardRef(
  ({ className, variant = "outline", ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className={cn(
        variant === "outline" && buttonVariants({ variant: "oulinePoint1" }),
        variant === "default" &&
          cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0"),
        variant === "outline" && "m-0 shadow-sm",
        "w-full min-w-0 justify-center sm:w-auto sm:shrink-0 sm:flex-none",
        className,
      )}
      {...props}
    />
  ),
);
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
