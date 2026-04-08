import React from "react";

import { Separator } from "./separator";

const SEPARATOR_DOC_PROPS = ["orientation", "decorative"];

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    controls: { include: SEPARATOR_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **orientation** — \`horizontal\`(가로 구분선) / \`vertical\`(세로 구분선).
- **decorative** — \`true\`면 스크린 리더에서 순수 장식으로 처리.`,
      },
      controls: { include: SEPARATOR_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "가로선 또는 세로선",
    },
    decorative: {
      control: "boolean",
      description: "true면 접근성 트리에서 순수 장식",
    },
  },
};

export default meta;

export const Horizontal = {
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  render: (args) => (
    <div className="w-[280px] space-y-3">
      <p className="text-sm text-muted-foreground">위쪽 영역</p>
      <Separator orientation={args.orientation} decorative={args.decorative} />
      <p className="text-sm text-muted-foreground">아래쪽 영역</p>
    </div>
  ),
};

export const Vertical = {
  args: {
    orientation: "vertical",
    decorative: true,
  },
  render: (args) => (
    <div className="flex h-24 items-stretch gap-4">
      <span className="text-sm">왼쪽</span>
      <Separator orientation={args.orientation} decorative={args.decorative} />
      <span className="text-sm">오른쪽</span>
    </div>
  ),
};
