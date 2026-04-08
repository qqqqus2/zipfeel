import * as React from "react";
import { Textarea, TextareaBox } from "./textarea";

const TEXTAREA_DOC_PROPS = [
  "placeholder",
  "disabled",
  "rows",
  "readOnly",
  "required",
];

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    controls: { include: TEXTAREA_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **placeholder** — 빈 상태 안내 문구.
- **disabled** — 입력 비활성.
- **rows** — 기본 보이는 줄 수.
- **readOnly** — 읽기 전용.
- **required** — 필수 필드 힌트.

글자 수·라벨이 필요하면 스토리의 \`TextareaBox\` 조합을 사용하세요.`,
      },
      controls: { include: TEXTAREA_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "placeholder",
    },
    disabled: {
      control: "boolean",
      description: "비활성",
    },
    rows: {
      control: "number",
      description: "표시 줄 수(rows)",
    },
    readOnly: {
      control: "boolean",
      description: "읽기 전용",
    },
    required: {
      control: "boolean",
      description: "필수 입력",
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

export const CharacterLimit = {
  name: "글자수 제한",
  render: () => (
    <div className="w-[min(100%,520px)] space-y-2">
      <TextareaBox placeholder="입력하세요" max={5000} label="항목명" />
      <TextareaBox
        placeholder="입력하세요"
        showLabel={false}
        showCount={false}
        className="mt-0"
      />
    </div>
  ),
};
