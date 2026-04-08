import React from "react";

import { Label } from "./label";
import { Input } from "./input";

const LABEL_DOC_PROPS = ["children", "htmlFor"];

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
    controls: { include: LABEL_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **children** — 라벨에 보이는 텍스트(또는 인라인 콘텐츠).
- **htmlFor** — 연결할 폼 컨트롤의 \`id\`. 클릭 시 해당 요소로 포커스·연동됩니다.`,
      },
      controls: { include: LABEL_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "라벨 텍스트" },
    htmlFor: {
      control: "text",
      description: "연결할 컨트롤의 id(htmlFor)",
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: "라벨",
  },
};

export const WithInput = {
  name: "Input과 연결",
  render: () => (
    <div className="flex w-[min(100%,320px)] flex-col gap-2">
      <Label htmlFor="story-label-input">이메일</Label>
      <Input id="story-label-input" type="email" placeholder="name@example.com" />
    </div>
  ),
};
