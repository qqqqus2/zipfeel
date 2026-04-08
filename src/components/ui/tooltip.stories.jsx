import React from "react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const TOOLTIP_DOC_PROPS = [
  "open",
  "defaultOpen",
  "onOpenChange",
  "delayDuration",
  "disableHoverableContent",
];

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    controls: { include: TOOLTIP_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (Tooltip 루트)

- **open** — 제어: 표시 여부.
- **defaultOpen** — 비제어: 초기 표시(주로 디버그용).
- **onOpenChange** — 열림 변경 콜백.
- **delayDuration** — 호버 후 나타나기까지 지연(ms).
- **disableHoverableContent** — 콘텐츠 위로 포인터를 옮겨도 유지할지 여부.

보통 \`TooltipProvider\`로 감싸고 \`TooltipTrigger\`·\`TooltipContent\`로 구성합니다.`,
      },
      controls: { include: TOOLTIP_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;

export const Default = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip
          textTooltip textTooltip textTooltip textTooltip text
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Top = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Appears on top</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const LongText = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Long content</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip. It can wrap across multiple lines when
          needed.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};
