import * as React from "react";
import { Glasses, Info, Tag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const CARD_DOC_PROPS = ["variant"];

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    controls: { include: CARD_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **variant** — \`default\`, \`hover\`, \`active\`, \`filled\`, \`disabled\` 등 카드 시각 상태.

헤더·본문·푸터는 \`CardHeader\`, \`CardTitle\`, \`CardDescription\`, \`CardContent\`, \`CardFooter\`로 나눕니다.`,
      },
      controls: { include: CARD_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "hover", "active", "filled", "disabled"],
      description: "카드 시각 상태(variant)",
    },
  },
};

export default meta;

/** 설정 카드형 UI — `variant`: default · hover(고정) · active · filled(값 있음) · disabled */
function ColumnSettingCard({ variant, description }) {
  return (
    <Card variant={variant} className="w-full max-w-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-center gap-1">
            <CardTitle className="text-sm font-semibold">컬럼명</CardTitle>
            <button
              type="button"
              className={cn(
                "inline-flex size-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
                variant === "active"
                  ? "text-white/80 hover:text-white"
                  : "text-gray-4 hover:text-gray-6",
              )}
              aria-label="도움말"
            >
              <Info className="size-3.5" strokeWidth={2} aria-hidden />
            </button>
          </div>
          <CardDescription className="text-xs leading-snug">
            {description}
          </CardDescription>
        </div>
        <div className="shrink-0 pt-0.5">
          {variant === "hover" ? (
            <span
              className="inline-flex size-9 items-center justify-center rounded-full bg-point-2 text-white shadow-sm"
              aria-hidden
            >
              <Glasses className="size-4" strokeWidth={2} />
            </span>
          ) : null}
          {variant === "active" ? (
            <span
              className="inline-flex size-9 items-center justify-center rounded-full bg-black/25 text-white shadow-inner"
              aria-hidden
            >
              <Glasses className="size-4" strokeWidth={2} />
            </span>
          ) : null}
          {variant === "default" || variant === "filled" || variant === "disabled" ? (
            <Tag
              className={cn(
                "size-9",
                variant === "filled" ? "text-gray-6" : "text-gray-4",
              )}
              strokeWidth={1.75}
              aria-hidden
            />
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export const VariantsColumnStyle = {
  name: "Variants (컬럼 설정 카드)",
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <ColumnSettingCard variant="default" description="설정 안함" />
      <ColumnSettingCard variant="hover" description="설정 안함" />
      <ColumnSettingCard variant="active" description="설정 안함" />
      <ColumnSettingCard variant="filled" description="일이삼사오육칠팔구십…" />
      <ColumnSettingCard variant="disabled" description="일이삼사오육칠팔구십…" />
    </div>
  ),
  parameters: { layout: "padded" },
};

/** 헤더·본문·푸터를 모두 쓰는 기본 패턴 */
export const Default = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>
          부가 설명은 <code className="text-foreground">CardDescription</code>
          에 넣습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          본문 영역입니다. 폼 필드나 리스트 등을 배치할 수 있습니다.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button type="button" variant="outline" size="sm">
          취소
        </Button>
        <Button type="button" size="sm">
          확인
        </Button>
      </CardFooter>
    </Card>
  ),
};

/** 제목만 있는 간단한 카드 */
export const HeaderOnly = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>알림</CardTitle>
        <CardDescription>설명 한 줄</CardDescription>
      </CardHeader>
    </Card>
  ),
};

/** 본문만 (헤더 없이) */
export const ContentOnly = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardContent className="pt-6">
        <p className="text-sm">
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            CardContent
          </code>
          에만 패딩을 주어 헤더 없이 쓸 수 있습니다.
        </p>
      </CardContent>
    </Card>
  ),
};

/** 그리드에 여러 장 배치 예시 */
export const Grid = {
  render: () => (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {["첫째", "둘째", "셋째"].map((label) => (
        <Card key={label}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{label}</CardTitle>
            <CardDescription>짧은 부가 설명</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <p className="text-sm text-muted-foreground">본문 텍스트</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
