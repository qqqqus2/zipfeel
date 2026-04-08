import * as React from "react";

import { MultiSelectCombobox } from "./multi-select-combobox";

const MULTI_COMBO_DOC_PROPS = [
  "label",
  "options",
  "value",
  "onValueChange",
  "placeholder",
  "searchable",
  "searchPlaceholder",
  "disabled",
  "required",
  "invalid",
  "aria-invalid",
];

const meta = {
  title: "UI/MultiSelectCombobox",
  component: MultiSelectCombobox,
  parameters: {
    layout: "centered",
    controls: { include: MULTI_COMBO_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **label** — 트리거 왼쪽 라벨.
- **options** — \`{ value, label }\` 목록.
- **value** — 선택된 value 문자열 배열(제어).
- **onValueChange** — 선택 배열 변경 콜백.
- **placeholder** — 미선택 시 문구.
- **searchable** — 목록 상단 검색 입력.
- **searchPlaceholder** — 검색 입력 placeholder.
- **disabled** / **required** — 비활성·필수(접근성 힌트).
- **invalid** / **aria-invalid** — 검증 오류 스타일·속성.`,
      },
      controls: { include: MULTI_COMBO_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "트리거 왼쪽 라벨" },
    options: {
      control: false,
      description: "{ value, label }[] 목록",
    },
    value: {
      control: false,
      description: "선택된 value 문자열 배열(제어)",
    },
    onValueChange: {
      control: false,
      description: "선택 배열 변경 콜백",
    },
    placeholder: { control: "text", description: "미선택 시 문구" },
    searchable: {
      control: "boolean",
      description: "목록 상단 검색 입력 표시",
    },
    searchPlaceholder: {
      control: "text",
      description: "검색 입력 placeholder",
    },
    disabled: { control: "boolean", description: "비활성" },
    required: { control: "boolean", description: "필수(aria-required)" },
    invalid: { control: "boolean", description: "검증 오류 스타일" },
    "aria-invalid": {
      control: "boolean",
      description: "스크린리더용 invalid(표준 속성)",
    },
  },
};

export default meta;

const options = [
  { value: "default-1", label: "Default" },
  { value: "default-2", label: "Default" },
  { value: "default-3", label: "Default" },
  { value: "default-4", label: "Default" },
  { value: "default-5", label: "Default" },
];

function DefaultStory() {
  const [value, setValue] = React.useState([]);

  return (
    <div className="w-[340px]">
      <MultiSelectCombobox
        label="항목명"
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="선택하세요"
      />
    </div>
  );
}

function RequiredStory() {
  const [value, setValue] = React.useState([]);

  return (
    <div className="w-[340px]">
      <MultiSelectCombobox
        label="항목명"
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="선택하세요"
        required
      />
    </div>
  );
}

function PreselectedStory() {
  const [value, setValue] = React.useState(["default-1", "default-2"]);

  return (
    <div className="w-[340px] space-y-3">
      <MultiSelectCombobox
        label="항목명"
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="선택하세요"
      />
      <p className="text-sm text-muted-foreground">
        현재: {value.length}건 선택
      </p>
    </div>
  );
}

export const Default = {
  args: {
    label: "항목명",
    options,
    value: [],
    onValueChange: () => {},
    placeholder: "선택하세요",
  },
  render: () => <DefaultStory />,
};

export const Required = {
  name: "필수(required)",
  render: () => <RequiredStory />,
};

export const Preselected = {
  name: "Selected(Multi) 예시",
  args: {
    label: "항목명",
    options,
    value: ["default-1", "default-2"],
    onValueChange: () => {},
    placeholder: "선택하세요",
  },
  render: () => <PreselectedStory />,
};
