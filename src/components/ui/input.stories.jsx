import React from "react";
import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Input 타입",
    },
    placeholder: {
      control: "text",
      description: "Placeholder 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
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
