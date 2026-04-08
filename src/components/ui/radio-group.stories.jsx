import React from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const RADIO_GROUP_DOC_PROPS = [
  "value",
  "defaultValue",
  "onValueChange",
  "disabled",
  "name",
  "orientation",
  "required",
];

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    controls: { include: RADIO_GROUP_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (RadioGroup)

- **value** — 제어: 선택된 항목의 \`value\`.
- **defaultValue** — 비제어: 초기 선택.
- **onValueChange** — 선택 변경 콜백.
- **disabled** — 그룹 전체 비활성.
- **name** — 폼 제출 시 필드 이름.
- **orientation** — \`vertical\` / \`horizontal\` 배치.
- **required** — 필수 선택 힌트.

개별 라디오는 \`RadioGroupItem value="..."\`로 둡니다.`,
      },
      controls: { include: RADIO_GROUP_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text", description: "제어: 선택된 value" },
    defaultValue: { control: "text", description: "비제어: 초기 value" },
    onValueChange: {
      control: false,
      description: "선택 변경 콜백",
    },
    disabled: { control: "boolean", description: "그룹 전체 비활성" },
    name: { control: "text", description: "폼 필드 name" },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "항목 배치 방향",
    },
    required: { control: "boolean", description: "필수 선택" },
  },
};

export default meta;

export const Default = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one" className="text-sm font-medium">
          Option One
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two" className="text-sm font-medium">
          Option Two
        </label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className="text-sm font-medium">
          Default
          <p className="text-xs text-muted-foreground">
            The default spacing option
          </p>
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className="text-sm font-medium">
          Comfortable
          <p className="text-xs text-muted-foreground">
            More spacing between elements
          </p>
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className="text-sm font-medium">
          Compact
          <p className="text-xs text-muted-foreground">
            Less spacing, more content
          </p>
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d1" />
        <label htmlFor="d1" className="text-sm font-medium opacity-50">
          Option One (Disabled)
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d2" />
        <label htmlFor="d2" className="text-sm font-medium opacity-50">
          Option Two (Disabled)
        </label>
      </div>
    </RadioGroup>
  ),
};

export const HorizontalLayout = {
  render: () => (
    <RadioGroup defaultValue="card" className="flex gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="card" id="h1" />
        <label htmlFor="h1" className="text-sm font-medium">
          Card
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="h2" />
        <label htmlFor="h2" className="text-sm font-medium">
          PayPal
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="apple" id="h3" />
        <label htmlFor="h3" className="text-sm font-medium">
          Apple Pay
        </label>
      </div>
    </RadioGroup>
  ),
};
