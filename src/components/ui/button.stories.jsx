import React from "react";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "point1",
        "point2",
        "point3",
        "sub1",
        "sub2",
        "sub3",
        "sub4",
        "sub8",
      ],
      description: "버튼의 시각적 스타일",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "버튼의 크기",
    },
    asChild: {
      control: "boolean",
      description: "자식 요소로 렌더링할지 여부",
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Destructive = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Small = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Icon = {
  args: {
    children: "⚙",
    size: "icon",
  },
};

// Figma Design Token Buttons
export const Point1 = {
  args: {
    children: "Point 1",
    variant: "point1",
  },
};

export const Point2 = {
  args: {
    children: "Point 2",
    variant: "point2",
  },
};

export const Point3 = {
  args: {
    children: "Point 3",
    variant: "point3",
  },
};

export const Sub1 = {
  args: {
    children: "Sub 1",
    variant: "sub1",
  },
};

export const Sub2 = {
  args: {
    children: "Sub 2",
    variant: "sub2",
  },
};

export const Sub3 = {
  args: {
    children: "Sub 3",
    variant: "sub3",
  },
};

export const Sub4 = {
  args: {
    children: "Sub 4",
    variant: "sub4",
  },
};

export const Sub8 = {
  args: {
    children: "Sub 8",
    variant: "sub8",
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">⚙</Button>
      </div>
    </div>
  ),
};

export const FigmaTokens = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-1">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Point Colors</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="point1">Point 1</Button>
          <Button variant="point2">Point 2</Button>
          <Button variant="point3">Point 3</Button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Sub Colors</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="sub1">Sub 1</Button>
          <Button variant="sub2">Sub 2</Button>
          <Button variant="sub3">Sub 3</Button>
          <Button variant="sub4">Sub 4</Button>
          <Button variant="sub8">Sub 8</Button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Sizes with Point 2</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Button variant="point2" size="sm">Small</Button>
          <Button variant="point2" size="default">Default</Button>
          <Button variant="point2" size="lg">Large</Button>
        </div>
      </div>
    </div>
  ),
};
