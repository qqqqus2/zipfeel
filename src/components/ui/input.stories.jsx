import { Input } from "./input";

const INPUT_DOC_PROPS = [
  "type",
  "placeholder",
  "disabled",
  "required",
  "readOnly",
];

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    controls: { include: INPUT_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **type** — \`text\`, \`email\`, \`password\`, \`number\`, \`tel\`, \`url\` 등 네이티브 input 타입.
- **placeholder** — 입력 힌트 문구.
- **disabled** — 포커스·입력 불가.
- **required** — 폼 제출 시 브라우저·접근성 힌트용 필수 여부.
- **readOnly** — 값은 보이지만 수정 불가.

접두·접미 라벨 등 확장 props는 \`input.jsx\`·스토리 예시를 참고하세요.`,
      },
      controls: { include: INPUT_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "input type",
    },
    placeholder: {
      control: "text",
      description: "placeholder",
    },
    disabled: {
      control: "boolean",
      description: "비활성",
    },
    required: {
      control: "boolean",
      description: "필수 입력(폼 검증 힌트)",
    },
    readOnly: {
      control: "boolean",
      description: "읽기 전용",
    },
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Email = {
  args: {
    type: "email",
    placeholder: "email@example.com",
  },
};

export const Password = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithValue = {
  args: {
    defaultValue: "Hello World",
  },
};

export const AllTypes = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="email@example.com" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="tel" placeholder="Phone number" />
      <Input type="url" placeholder="https://example.com" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
};

export const WithPrefixLabel = {
  name: "접두 텍스트(prefixLabel)",
  render: () => (
    <div className="w-80">
      <Input prefixLabel="항목명" placeholder="입력하세요" />
    </div>
  ),
};

export const WithSuffixLabel = {
  name: "접미 텍스트(suffixLabel)",
  render: () => (
    <div className="w-80">
      <Input suffixLabel="항목명" placeholder="입력하세요" />
    </div>
  ),
};

export const WithPrefixAndSuffix = {
  name: "접두·접미 텍스트",
  render: () => (
    <div className="w-80">
      <Input
        prefixLabel="항목명"
        suffixLabel="항목명"
        placeholder="입력하세요"
      />
    </div>
  ),
};
