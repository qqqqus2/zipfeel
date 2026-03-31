import React from "react";
import { Button } from "./button";
import { Icon } from "./icon";
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

export const FigmaTokens = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-1">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-6">
          Default Colors
        </h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
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
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Sizes</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Button variant="point2" size="sm">
            Small
          </Button>
          <Button variant="point2" size="default">
            Default
          </Button>
          <Button variant="point2" size="lg">
            Large
          </Button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Icon</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Button size="icon" aria-label="설정">
            <Icon name="more_vert" className="text-gray-6" />
          </Button>

          <Button variant="ghost" size="sm" className="group">
            <Icon
              name="diamond"
              className="text-gray-6 group-hover:text-point-2"
            />
            수정
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-6">
          Icon + Text (Sprite)
        </h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Button variant="point2">
            <Icon name="login" className="text-white" />
            로그인
          </Button>
          <Button variant="ghost">
            <Icon name="login" className="text-white" />
            로그인
          </Button>
          <Button variant="outline" className="group">
            <Icon
              name="logout"
              className="text-gray-6 group-hover:text-point-2"
            />
            로그아웃
          </Button>
          <Button variant="sub4" disabled>
            <Icon name="book_ribbon" className="text-gray-6" />
            Disabled
          </Button>
          <Button variant="point2" className="group">
            <Icon
              name="search_activity"
              className="text-white group-hover:text-point-2"
            />
            내역 추가
          </Button>
        </div>
      </div>
    </div>
  ),
};
