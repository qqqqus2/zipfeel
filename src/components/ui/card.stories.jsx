import * as React from "react";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

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
