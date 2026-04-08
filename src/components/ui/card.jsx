import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const CardVariantContext = React.createContext("default");

/** `Card`의 `variant`에 맞춰 타이틀/설명 톤을 쓸 때 사용 */
export function useCardVariant() {
  return React.useContext(CardVariantContext);
}

const cardVariants = cva(
  [
    "rounded-lg p-[20px] shadow-[5px_5px_10px_0px_rgb(230_230_230_/_0.8),-5px_-5px_10px_0px_rgb(255_255_255_/_0.2)]",
    "transition-[color,background-color,border-color,box-shadow,opacity] duration-150",
  ],
  {
    variants: {
      variant: {
        /** 기본: 흰 배경, 호버 시 보라 테두리·연한 배경 (이미지 1·2) */
        default: [
          "border border-transparent bg-white text-card-foreground",
          "hover:border-2 hover:border-point-2 hover:bg-gray-1",
        ],
        /** 스토리/문서용: 호버 상태를 고정 표시 */
        hover: "border-2 border-point-2 bg-gray-1 text-card-foreground",
        /** 클릭·선택(액티브): point-2 배경 + 우상단 하이라이트(before). 임의 배경 클래스는 Tailwind 스캔 시 깨질 수 있어 토큰 사용 */
        active: [
          "relative isolate overflow-hidden border-0 bg-point-2 text-white shadow-md",
          "before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-lg",
          "before:bg-gradient-to-br before:from-white/25 before:via-transparent before:to-transparent",
          "[&>*]:relative [&>*]:z-10",
        ],
        /**
         * 값이 채워진 상태(이미지 4 — 이름 미정, 팀에서 `selected` 등으로 바꿔도 됨)
         * 흰 배경 + 제목 포인트 컬러, 본문은 진한 그레이
         */
        filled: [
          "border border-transparent bg-white text-card-foreground",
          "hover:border-2 hover:border-point-2 hover:bg-gray-1",
        ],
        /** 비활성 (이미지 5) */
        disabled:
          "pointer-events-none border border-transparent bg-white text-card-foreground opacity-45",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const cardTitleVariants = cva("font-semibold leading-none tracking-tight", {
  variants: {
    variant: {
      default: "text-gray-6",
      hover: "text-point-2",
      active: "text-white",
      filled: "text-point-2",
      disabled: "text-gray-3",
    },
  },
  defaultVariants: { variant: "default" },
});

const cardDescriptionVariants = cva("text-sm", {
  variants: {
    variant: {
      default: "text-gray-3",
      hover: "text-gray-6",
      active: "text-white/90",
      filled: "text-gray-6",
      disabled: "text-gray-3",
    },
  },
  defaultVariants: { variant: "default" },
});

const Card = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => (
    <CardVariantContext.Provider value={variant}>
      <div
        ref={ref}
        data-variant={variant}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      />
    </CardVariantContext.Provider>
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 ", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => {
  const v = useCardVariant();
  return (
    <div
      ref={ref}
      className={cn(cardTitleVariants({ variant: v }), className)}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => {
  const v = useCardVariant();
  return (
    <div
      ref={ref}
      className={cn(cardDescriptionVariants({ variant: v }), className)}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
  cardTitleVariants,
  cardDescriptionVariants,
};
