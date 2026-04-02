import * as React from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

/** 말풍선(`variant="bubble"`): Tooltip과 비슷한 look + 닫기 버튼, 클릭으로 열림 */
export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          열기
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="bubble">
        <div className="grid gap-[10px]">
          <h4 className="font-bold text-[16px] text-black leading-[20px] ">
            Popovers Title
          </h4>
          <p className="text-sm text-black">
            Popovers도 Max Width = 330까지 상하만 적용될 수 있으며 Text Link도
            삽입 가능
          </p>
          <div className="flex justify-center items-center w-full h-[100px] bg-gray-200 text-black">
            Image Area
          </div>
          <p className="text-sm text-black">
            Image도 삽입할 수 있습니다. hover(pc) / click(mob)으로 활성화됩니다.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

/** 콘텐츠 정렬 — 트리거 기준 start */
export const AlignStart = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          align=start
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="bubble" align="start" className="w-80">
        <p className="text-sm text-black/90 pr-[40px]">
          <code className="rounded bg-black/10 px-1">
            align=&quot;start&quot;
          </code>{" "}
          로 트리거 왼쪽(또는 방향에 따라 시작점)에 맞출 수 있습니다.
        </p>
      </PopoverContent>
    </Popover>
  ),
};

/** 말풍선에서 닫기 버튼 숨김 */
export const BubbleWithoutClose = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          닫기 없음
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="bubble" showCloseButton={false}>
        <p className="text-sm text-white/90 ">
          <code className="rounded bg-white/10 px-1">
            showCloseButton=&#123;false&#125;
          </code>
        </p>
      </PopoverContent>
    </Popover>
  ),
};

/** 콤보박스 등과 동일한 흰 패널(`variant="panel"`, 닫기 없음 기본) */
export const Panel = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          패널 열기
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="panel" className="w-80">
        <div className="grid gap-2">
          <h4 className="font-medium leading-none">일반 패널</h4>
          <p className="text-sm text-muted-foreground">
            기본값은{" "}
            <code className="text-foreground">variant=&quot;panel&quot;</code>
            입니다. 콤보박스·검색 드롭다운과 같은 스타일입니다.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

/** 짧은 폼 예시 */
export const WithForm = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="point1">
          빠른 입력
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="panel" className="w-80">
        <div className="grid gap-3">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">메모</h4>
            <p className="text-sm text-muted-foreground">
              저장 전 임시 입력에 쓸 수 있습니다.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="popover-memo">내용</Label>
            <Input id="popover-memo" placeholder="입력…" />
          </div>
          <Button type="button" size="sm" className="w-full">
            확인
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
