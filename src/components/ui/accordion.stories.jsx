import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Icon } from "./icon";
import { Button } from "./button";

const ACCORDION_DOC_PROPS = [
  "type",
  "collapsible",
  "defaultValue",
  "value",
  "onValueChange",
  "disabled",
];

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
    controls: { include: ACCORDION_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (Accordion 루트)

- **type** — \`single\`(한 번에 하나) / \`multiple\`.
- **collapsible** — \`single\`일 때 열린 항목을 다시 닫을 수 있는지.
- **defaultValue** — 비제어: 초기 열린 항목(\`string\` 또는 \`string[]\`).
- **value** / **onValueChange** — 제어 모드.
- **disabled** — 전체 비활성.

항목은 \`AccordionItem\` + \`AccordionTrigger\` + \`AccordionContent\`로 구성합니다.`,
      },
      controls: { include: ACCORDION_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "단일/다중 열림",
    },
    collapsible: {
      control: "boolean",
      description: "single에서 닫기 허용",
    },
    defaultValue: {
      control: "text",
      description: "비제어 초기 value (single: 한 id)",
    },
    value: { control: "text", description: "제어 value" },
    onValueChange: { control: false, description: "값 변경 콜백" },
    disabled: { control: "boolean", description: "루트 비활성" },
  },
};

export default meta;

export const Default = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      className="w-full max-md:border max-md:border-gray-7 max-md:rounded-md"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 섹션</AccordionTrigger>
        <AccordionContent>
          접었다 펼 수 있는 본문입니다. 키보드로도 탐색할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 섹션</AccordionTrigger>
        <AccordionContent>
          추가 설명이나 폼을 넣을 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>세 번째 섹션</AccordionTrigger>
        <AccordionContent>
          목록·테이블 등도 이 안에 둘 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>네 번째 섹션</AccordionTrigger>
        <AccordionContent>
          목록·테이블 등도 이 안에 둘 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DesignSpec = {
  name: "Design (PC/Mobile)",
  render: () => (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <Accordion
        type="single"
        collapsible
        defaultValue="range-1"
        className="w-full max-md:border max-md:border-gray-7 max-md:rounded-md"
      >
        <AccordionItem value="range-1">
          <AccordionTrigger className="group">
            <div className="flex w-full min-w-0 items-center justify-between gap-3 pr-1">
              <div className="min-w-0">
                <div className="text-xs text-gray-5 group-hover:text-point-3">
                  1~15 · A-Line · #{`{(A라인-최대50자)}`}
                </div>
                <div className="mt-1 truncate text-base font-semibold text-gray-6">
                  #{`{(B라인-최대50자)}`}
                </div>
              </div>

              <div className="mt-1 flex shrink-0 items-center gap-1 text-gray-5">
                <Button variant="ghost" size="icon" className="p-0">
                  <Icon name="diamond" size={24} className="text-gray-6" />
                </Button>
                <Button variant="ghost" size="icon" className="p-0">
                  <Icon name="ink_eraser" size={24} className="text-gray-6" />
                </Button>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-[20px]">
            여기가 컨텐츠 내용
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="range-2">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full min-w-0 items-center justify-between gap-3 pr-2">
              <div className="min-w-0">
                <div className="text-xs text-gray-5">
                  1~15 · A-Line · #{`{(A라인-최대50자)}`}
                </div>
                <div className="mt-1 truncate text-base font-semibold text-gray-6">
                  #{`{(B라인-최대50자)}`}
                </div>
              </div>

              <div className="mt-1 flex shrink-0 items-center gap-1 text-gray-5">
                <Button variant="ghost" size="icon" className="p-0">
                  <Icon name="diamond" size={24} className="text-gray-6" />
                </Button>
                <Button variant="ghost" size="icon" className="p-0">
                  <Icon name="ink_eraser" size={24} className="text-gray-6" />
                </Button>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pt-2">
            <div className="rounded-md bg-gray-2/40 p-4">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  { title: "일일일일일…", percent: "45.0%", strong: false },
                  {
                    title: "주인공이 연쇄 실종 사건의 첫 단서를 발견",
                    percent: "00.0%",
                    strong: true,
                  },
                  {
                    title: "기호가 과거실종 사건과 연결됨",
                    percent: "00.0%",
                    strong: false,
                  },
                  {
                    title: "폐건물 조사 중 조직의 활동 흔적 발견",
                    percent: "00.0%",
                    strong: false,
                  },
                ].map((it, idx) => (
                  <div
                    key={idx}
                    className={[
                      "rounded-xl border border-gray-3 bg-gray-2/60 p-4 text-gray-6",
                      it.strong
                        ? "border-point-2 shadow-[0_0_0_1px_rgb(var(--point-color-2))]"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-xs text-gray-5">Eps. 00</div>
                      <div className="text-xs text-gray-5">{it.percent}</div>
                    </div>
                    <div className="mt-2 line-clamp-3 text-sm font-medium leading-5">
                      {it.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  + Next Episode
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
