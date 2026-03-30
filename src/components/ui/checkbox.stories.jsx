import React from "react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;

export const Default = {
  args: {},
};

export const Checked = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const MultipleCheckboxes = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" defaultChecked />
        <label htmlFor="option1" className="text-sm font-medium">
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <label htmlFor="option2" className="text-sm font-medium">
          Option 2
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <label htmlFor="option3" className="text-sm font-medium">
          Option 3
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option4" disabled />
        <label htmlFor="option4" className="text-sm font-medium opacity-50">
          Option 4 (Disabled)
        </label>
      </div>
    </div>
  ),
};
