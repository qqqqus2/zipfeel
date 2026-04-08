"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialogChromeContext = React.createContext({
  showCornerArt: false,
});

/**
 * 코너 SVG와 겹치지 않게 **텍스트·폼 줄만** 우측으로 밀 때 사용.
 * `AlertDialogHeader` / `AlertDialogBody`에 자동 적용 · 커스텀 블록에도 재사용 가능.
 */

/** `showCornerArt`일 때 우하단 배경 */
const CORNER_ART_BY_KEY = {
  warning: {
    iconSrc: "/icon/warning.svg",
    width: 102,
    height: 104,
    sizeClass: "w-[120px] h-[120px]",
    wrapperClass: "bottom-0 right-0 flex items-end justify-end",
    imgClass:
      "h-full w-full object-contain object-bottom object-right select-none",
  },
  /** 확인 다이얼로그 기본 */
  confirmCheck: {
    iconSrc: "/icon/check_circle.svg",
    width: 102,
    height: 98,
    sizeClass: "w-[120px] h-auto",
    wrapperClass: "bottom-0 right-0 flex items-end justify-end",
    imgClass:
      "h-full w-full object-contain object-bottom object-right select-none",
  },
  /** 확인 다이얼로그 — 고객지원·문의 안내 등 */
  confirmSupport: {
    iconSrc: "/icon/contact_support.svg",
    width: 99,
    height: 127,
    sizeClass: "w-[132px] h-[132px]",
    wrapperClass: "top-[40px] right-[-6px] flex items-end justify-end",
    imgClass:
      "h-full w-full object-contain object-bottom object-right select-none",
  },
};

function resolveCornerArtKey(cornerArtVariant, confirmCornerGraphic) {
  if (cornerArtVariant === "confirm") {
    return confirmCornerGraphic === "contactSupport"
      ? "confirmSupport"
      : "confirmCheck";
  }
  return "warning";
}

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
  (
    {
      className,
      children,
      showCloseButton = true,
      showCornerArt = true,
      cornerArtVariant = "warning",
      /** `cornerArtVariant="confirm"` 일 때만 적용 — 기본 check_circle, 문의류는 contact_support */
      confirmCornerGraphic = "checkCircle",
      ...props
    },
    ref,
  ) => {
    const cornerKey = resolveCornerArtKey(
      cornerArtVariant,
      confirmCornerGraphic,
    );
    const corner = showCornerArt ? CORNER_ART_BY_KEY[cornerKey] : null;

    return (
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
          ref={ref}
          className={cn(
            "relative fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xs translate-x-[-50%] translate-y-[-50%] gap-4 bg-background p-[20px] pt-10 shadow-lg duration-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2",
            "data-[state=open]:slide-in-from-top-[48%] ",
            corner && "overflow-hidden",
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
                  "absolute right-[10px] top-[10px] z-20 flex justify-center items-center w-[24px] h-[24px] text-foreground ring-offset-background transition-opacity",
                  "hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                )}
                aria-label="닫기"
              >
                <X className="size-[24px]" strokeWidth={2} />
              </button>
            </AlertDialogPrimitive.Cancel>
          ) : null}
          {corner?.iconSrc ? (
            <div
              className={cn(
                "pointer-events-none absolute z-0",
                corner.sizeClass ?? "w-[120px] h-[120px]",
                corner.wrapperClass,
              )}
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- 고정 public SVG 장식 */}
              <img
                src={corner.iconSrc}
                alt=""
                className={corner.imgClass}
                width={corner.width}
                height={corner.height}
                decoding="async"
              />
            </div>
          ) : null}
          <AlertDialogChromeContext.Provider
            value={{ showCornerArt: Boolean(corner) }}
          >
            <div className="relative z-10 contents">{children}</div>
          </AlertDialogChromeContext.Provider>
        </AlertDialogPrimitive.Content>
      </AlertDialogPortal>
    );
  },
);
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }) => {
  const { showCornerArt } = React.useContext(AlertDialogChromeContext);
  return (
    <div
      className={cn(
        "flex flex-col gap-4 space-y-2 text-center sm:text-left",
        showCornerArt && "sm:pr-[4rem]",
        className,
      )}
      {...props}
    />
  );
};
AlertDialogHeader.displayName = "AlertDialogHeader";

/** 헤더와 푸터 사이 입력·설명 등 — 코너와 겹칠 때 `AlertDialogHeader`와 동일 우측 패딩 */
const AlertDialogBody = ({ className, ...props }) => {
  const { showCornerArt } = React.useContext(AlertDialogChromeContext);
  return (
    <div
      className={cn(showCornerArt && "sm:pr-[4rem]", className)}
      {...props}
    />
  );
};
AlertDialogBody.displayName = "AlertDialogBody";

/** 기본 알림은 `AlertDialogAction` outline 하나만 두는 패턴이 일반적입니다. */
const AlertDialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex w-full flex-col-reverse z-10 gap-[10px] sm:flex-row sm:items-stretch sm:justify-start sm:gap-[10px]",
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
      className={cn("text-sm text-muted-foreground sm:pr-[4rem]", className)}
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
          cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0 "),
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
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
