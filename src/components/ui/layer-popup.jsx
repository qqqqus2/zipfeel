"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const LayerPopup = DialogPrimitive.Root;

const LayerPopupTrigger = DialogPrimitive.Trigger;

const LayerPopupPortal = DialogPrimitive.Portal;

const LayerPopupClose = DialogPrimitive.Close;

/**
 * LayerPopup Overlay - 배경 오버레이
 */
const LayerPopupOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className,
        )}
        {...props}
    />
));
LayerPopupOverlay.displayName = DialogPrimitive.Overlay.displayName;

/**
 * LayerPopup Content - 팝업 컨텐츠
 *
 * 요구사항:
 * - max-w: 390px
 * - radius: 40px
 * - height: 100vh - 100px
 * - max-height: 기본 800px (stretch prop으로 조정 가능)
 * - 고정 헤더 (타이틀 + 닫기 버튼)
 * - 스크롤 가능한 컨텐츠 영역
 *
 * Props:
 * - stretch: "sm" (500px) | "md" (650px) | "lg" (800px) | "xl" (1000px) | "full" (stretch)
 */
const LayerPopupContent = React.forwardRef(
    ({ className, children, stretch = "lg", ...props }, ref) => {
        const maxHeightClass = {
            sm: "max-h-[500px]",
            md: "max-h-[650px]",
            lg: "max-h-[800px]",
            xl: "max-h-[1000px]",
            full: "max-h-[calc(100vh-100px)]",
        }[stretch];

        return (
            <LayerPopupPortal>
                <LayerPopupOverlay />
                <DialogPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
                        "w-full max-w-[390px]",
                        "h-[calc(100vh-100px)]",
                        maxHeightClass,
                        "bg-white rounded-[40px]",
                        "flex flex-col overflow-hidden",
                        "duration-200",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
                        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                        className,
                    )}
                    style={{
                        boxShadow:
                            "4px 4px 10px 0px rgba(32, 32, 32, 0.25), -4px -4px 10px 0px rgba(0, 0, 0, 0.2)",
                    }}
                    {...props}
                >
                    {children}
                </DialogPrimitive.Content>
            </LayerPopupPortal>
        );
    },
);
LayerPopupContent.displayName = DialogPrimitive.Content.displayName;

/**
 * LayerPopup Header - 고정 헤더 (타이틀 + 닫기 버튼)
 *
 * 특징:
 * - 상단에 고정
 * - 타이틀과 닫기 버튼 포함
 * - 스크롤 시에도 고정됨
 * - variant="dark": 어두운 배경 (#474554), 타이틀이 닫기 버튼 아래 위치
 */
const LayerPopupHeader = ({ className, children, variant, ...props }) => {
    const isDark = variant === "dark";

    return (
        <div
            className={cn(
                "shrink-0", // 헤더 영역이 축소되지 않도록
                "px-[30px] py-5",
                "border-b border-gray-2",
                "rounded-t-[40px]",
                isDark
                    ? "bg-[#474554] text-white flex flex-col gap-3"
                    : "bg-white flex items-center justify-between",
                className,
            )}
            {...props}
        >
            {isDark ? (
                <>
                    <div className="flex justify-end -mr-[6px]">
                        {React.Children.toArray(children).find(
                            (child) =>
                                React.isValidElement(child) &&
                                child.type?.displayName ===
                                    "LayerPopupCloseButton",
                        )}
                    </div>
                    <div>
                        {React.Children.toArray(children).find(
                            (child) =>
                                React.isValidElement(child) &&
                                child.type?.displayName ===
                                    DialogPrimitive.Title.displayName,
                        )}
                    </div>
                </>
            ) : (
                children
            )}
        </div>
    );
};
LayerPopupHeader.displayName = "LayerPopupHeader";

/**
 * LayerPopup Title - 팝업 타이틀
 */
const LayerPopupTitle = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            "text-[20px] font-semibold leading-none tracking-tight",
            className,
        )}
        {...props}
    />
));
LayerPopupTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * LayerPopup Close Button - 닫기 버튼
 */
const LayerPopupCloseButton = React.forwardRef(
    ({ className, variant, ...props }, ref) => (
        <DialogPrimitive.Close
            ref={ref}
            className={cn(
                "rounded-full ",
                variant === "dark"
                    ? "text-white hover:text-gray-3"
                    : "text-gray-6 hover:text-point-2",
                "transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-point-2 focus:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                className,
            )}
            {...props}
        >
            <Icon name="close" size={30} />
            <span className="sr-only">닫기</span>
        </DialogPrimitive.Close>
    ),
);
LayerPopupCloseButton.displayName = "LayerPopupCloseButton";

/**
 * LayerPopup Body - 스크롤 가능한 컨텐츠 영역
 */
const LayerPopupBody = ({ className, children, ...props }) => (
    <ScrollArea className={cn("flex-1 overflow-y-auto", className)} {...props}>
        <div className="px-6 py-5">{children}</div>
    </ScrollArea>
);
LayerPopupBody.displayName = "LayerPopupBody";

/**
 * LayerPopup Footer - 하단 고정 푸터 (선택사항)
 */
const LayerPopupFooter = ({ className, ...props }) => (
    <div
        className={cn(
            "flex items-center justify-between gap-2",
            "px-[30px] py-5",
            "border-t border-gray-2",
            "bg-white rounded-b-[40px]",
            "shrink-0",
            className,
        )}
        {...props}
    />
);
LayerPopupFooter.displayName = "LayerPopupFooter";

/**
 * LayerPopup Description - 팝업 설명
 */
const LayerPopupDescription = React.forwardRef(
    ({ className, ...props }, ref) => (
        <DialogPrimitive.Description
            ref={ref}
            className={cn("text-sm text-gray-5", className)}
            {...props}
        />
    ),
);
LayerPopupDescription.displayName = DialogPrimitive.Description.displayName;

/**
 * LayerPopup Notice - 상단 안내 영역
 *
 * 특징:
 * - 회색 배경 영역
 * - p 태그 앞에 3px 블렛 표시
 * - 일반적으로 Body 상단에 사용
 */
const LayerPopupNotice = ({ className, children, ...props }) => (
    <div
        className={cn(
            "bg-gray-1 -mt-6 -mx-5 px-6 py-5",
            "text-sm font-normal text-black",
            className,
        )}
        {...props}
    >
        <div className="flex flex-col gap-2">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === "p") {
                    return (
                        <div className="flex items-start gap-2">
                            <span
                                className="shrink-0 mt-[8px] w-[3px] h-[3px] rounded-full bg-black"
                                aria-hidden="true"
                            />
                            <p className="flex-1">{child.props.children}</p>
                        </div>
                    );
                }
                return child;
            })}
        </div>
    </div>
);
LayerPopupNotice.displayName = "LayerPopupNotice";

/**
 * StepLayerPopup Footer - 단계별 네비게이션 푸터
 *
 * 특징:
 * - 취소 버튼: 왼쪽 정렬, oulinePoint1 스타일
 * - 다음 버튼: 오른쪽, oulinePoint1 스타일, 현재 스텝 표기 (1/10 다음)
 * - 저장 후 닫기 버튼: 오른쪽, point1 스타일
 * - 3개의 버튼 항상 표시
 */
const StepLayerPopupFooter = ({
    currentStep,
    totalSteps,
    onCancel,
    onNext,
    onSaveAndClose,
    cancelLabel = "취소",
    nextLabel = "다음",
    saveLabel = "저장 후 닫기",
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                "flex items-center justify-between",
                "px-[30px] py-4",
                "border-t border-gray-2",
                "bg-white rounded-b-[40px]",
                "shrink-0",
                className,
            )}
            {...props}
        >
            {/* 왼쪽: 취소 버튼 */}
            <Button
                type="button"
                variant="oulinePoint1"
                size="md"
                onClick={onCancel}
            >
                {cancelLabel}
            </Button>

            {/* 오른쪽: 다음 버튼 + 저장 후 닫기 버튼 */}
            <div className="flex items-center gap-2">
                {/* 다음 버튼 (현재 스텝 표시 포함) */}
                <Button
                    type="button"
                    variant="oulinePoint1"
                    size="md"
                    onClick={onNext}
                >
                    {currentStep}/{totalSteps} {nextLabel}
                </Button>

                {/* 저장 후 닫기 버튼 */}
                <Button
                    type="button"
                    variant="point1"
                    size="md"
                    onClick={onSaveAndClose}
                >
                    {saveLabel}
                </Button>
            </div>
        </div>
    );
};
StepLayerPopupFooter.displayName = "StepLayerPopupFooter";

export {
    LayerPopup,
    LayerPopupPortal,
    LayerPopupOverlay,
    LayerPopupTrigger,
    LayerPopupClose,
    LayerPopupContent,
    LayerPopupHeader,
    LayerPopupTitle,
    LayerPopupCloseButton,
    LayerPopupBody,
    LayerPopupFooter,
    LayerPopupDescription,
    LayerPopupNotice,
    StepLayerPopupFooter,
};
