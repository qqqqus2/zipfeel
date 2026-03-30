import * as React from "react";
import { Textarea, TextareaBox } from "./textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    rows: {
      control: { type: "number", min: 2, max: 12, step: 1 },
      description: "rows 속성",
    },
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: "내용을 입력하세요…",
  },
};

export const WithRows = {
  args: {
    placeholder: "rows=6 예시",
    rows: 6,
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};

export const WithValue = {
  args: {
    defaultValue:
      "여러 줄 텍스트 예시입니다.\n\n- 첫 번째 줄\n- 두 번째 줄\n- 세 번째 줄",
  },
};

export const SizingExamples = {
  render: () => (
    <div className="flex w-[min(100%,520px)] flex-col gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">기본</p>
        <Textarea placeholder="기본 Textarea" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">작게 (min-height 축소)</p>
        <Textarea className="min-h-[44px]" placeholder="min-h-[44px]" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">크게 (min-height 확대)</p>
        <Textarea className="min-h-[140px]" placeholder="min-h-[140px]" />
      </div>
    </div>
  ),
};

function CharacterLimitDemo() {
  const [text, setText] = React.useState("");

  return (
    <div className="w-[min(100%,520px)] space-y-2">
      <TextareaBox placeholder="입력하세요" max={5000} label="항목명" />
      <TextareaBox
        placeholder="입력하세요"
        showLabel={false}
        showCount={false}
        className="mt-0"
      />
    </div>
  );
}

export const CharacterLimit = {
  name: "글자수 제한",
  render: () => <CharacterLimitDemo />,
};

function LabeledBoxWithCounterDemo() {
  return (
    <div className="w-[min(100%,520px)] space-y-4">
      <TextareaBox placeholder="입력하세요" max={5000} label="항목명" />
    </div>
  );
}

export const LabeledBoxWithCounter = {
  name: "라벨 + 카운터 (박스형)",
  render: () => <LabeledBoxWithCounterDemo />,
};
