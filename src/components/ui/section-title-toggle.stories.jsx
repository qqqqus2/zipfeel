import * as React from "react";

import { SectionTitleToggle } from "./section-title-toggle";

const SECTION_TOGGLE_DOC_PROPS = [
  "title",
  "requiredLabel",
  "disabled",
  "defaultExpanded",
  "defaultRequiredChecked",
];

const meta = {
  title: "UI/SectionTitleToggle",
  component: SectionTitleToggle,
  parameters: {
    layout: "padded",
    controls: { include: SECTION_TOGGLE_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **title** — 섹션 제목.
- **requiredLabel** — 필수 체크박스 옆 문구.
- **disabled** — 펼침·체크 모두 비활성.
- **defaultExpanded** — 비제어: 초기 펼침 여부.
- **defaultRequiredChecked** — 비제어: 필수 체크 초기값.

제어 모드는 스토리 \`Controlled\` 참고.`,
      },
      controls: { include: SECTION_TOGGLE_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "섹션 제목" },
    requiredLabel: { control: "text", description: "체크박스 옆 문구" },
    disabled: { control: "boolean", description: "전체 비활성" },
    defaultExpanded: {
      control: "boolean",
      description: "비제어: 초기 펼침",
    },
    defaultRequiredChecked: {
      control: "boolean",
      description: "비제어: 초기 필수 체크",
    },
  },
};

export default meta;

export const Default = {
  args: {
    title: "Section명",
    requiredLabel: "설정 필수",
    defaultExpanded: false,
    defaultRequiredChecked: false,
  },
};

export const Checked = {
  args: {
    title: "Section명",
    requiredLabel: "설정 필수",
    defaultExpanded: true,
    defaultRequiredChecked: true,
  },
};

function ListExampleStory() {
  const [aExpanded, setAExpanded] = React.useState(true);
  const [aRequired, setARequired] = React.useState(true);
  const [bExpanded, setBExpanded] = React.useState(true);
  const [bRequired, setBRequired] = React.useState(false);

  return (
    <div className="w-full max-w-2xl space-y-1">
      <SectionTitleToggle
        title="Section명"
        expanded={aExpanded}
        onExpandedChange={setAExpanded}
        requiredChecked={aRequired}
        onRequiredCheckedChange={setARequired}
      />
      <SectionTitleToggle
        title="Section명"
        expanded={bExpanded}
        onExpandedChange={setBExpanded}
        requiredChecked={bRequired}
        onRequiredCheckedChange={setBRequired}
      />
    </div>
  );
}

export const ListExample = {
  name: "리스트 예시",
  render: () => <ListExampleStory />,
};

