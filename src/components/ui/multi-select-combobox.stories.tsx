"use client";

import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  MultiSelectCombobox,
  type MultiSelectOption,
} from "./multi-select-combobox";

const meta = {
  title: "UI/MultiSelectCombobox",
  component: MultiSelectCombobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MultiSelectCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: MultiSelectOption[] = [
  { value: "default-1", label: "Default" },
  { value: "default-2", label: "Default" },
  { value: "default-3", label: "Default" },
  { value: "default-4", label: "Default" },
  { value: "default-5", label: "Default" },
];

export const Default: Story = {
  args: {
    label: "항목명",
    options,
    value: [],
    onValueChange: () => {},
    placeholder: "선택하세요",
  },
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);

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
  },
};

export const Preselected: Story = {
  name: "Selected(Multi) 예시",
  args: {
    label: "항목명",
    options,
    value: ["default-1", "default-2"],
    onValueChange: () => {},
    placeholder: "선택하세요",
  },
  render: () => {
    const [value, setValue] = React.useState<string[]>(["default-1", "default-2"]);

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
  },
};

