import React from "react";

import { Separator } from "./separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: { control: "boolean" },
  },
};

export default meta;

export const Horizontal = {
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  render: (args) => (
    <div className="w-[280px] space-y-3">
      <p className="text-sm text-muted-foreground">위쪽 영역</p>
      <Separator {...args} />
      <p className="text-sm text-muted-foreground">아래쪽 영역</p>
    </div>
  ),
};

export const Vertical = {
  args: {
    orientation: "vertical",
    decorative: true,
  },
  render: (args) => (
    <div className="flex h-24 items-stretch gap-4">
      <span className="text-sm">왼쪽</span>
      <Separator {...args} />
      <span className="text-sm">오른쪽</span>
    </div>
  ),
};
