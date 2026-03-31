import React, { useState } from "react";

import { SectionTitleToggle } from "./section-title-toggle";

const meta = {
  title: "UI/SectionTitleToggle",
  component: SectionTitleToggle,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    requiredLabel: { control: "text" },
    disabled: { control: "boolean" },
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

export const ListExample = {
  name: "리스트 예시",
  render: () => {
    const [aExpanded, setAExpanded] = useState(true);
    const [aRequired, setARequired] = useState(true);
    const [bExpanded, setBExpanded] = useState(true);
    const [bRequired, setBRequired] = useState(false);
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
  },
};

