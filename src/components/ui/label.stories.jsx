import React from "react";

import { Label } from "./label";
import { Input } from "./input";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

export const Default = {
  args: {
    children: "라벨",
  },
};

export const WithInput = {
  name: "Input과 연결",
  render: () => (
    <div className="flex w-[min(100%,320px)] flex-col gap-2">
      <Label htmlFor="story-label-input">이메일</Label>
      <Input id="story-label-input" type="email" placeholder="name@example.com" />
    </div>
  ),
};
