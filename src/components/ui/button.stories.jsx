import React from "react";
import { Button } from "./button";
import { Icon } from "./icon";

const BUTTON_DOC_PROPS = [
  "variant",
  "size",
  "asChild",
  "disabled",
  "children",
];

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: { include: BUTTON_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **variant** — 배경·테두리·텍스트 색 등 시각 스타일. 시맨틱(\`default\`, \`destructive\`, \`outline\`, \`secondary\`, \`ghost\`, \`link\`)과 Figma 토큰(\`point1\`–\`point3\`, \`sub1\`–\`sub4\`, \`sub8\`), 포인트 테두리 \`oulinePoint1\` 등.
- **size** — 높이·좌우 패딩·내부 아이콘 크기. \`default\`, \`sm\`, \`lg\`, 가로 전체 \`full\`, 정사각 아이콘 \`icon\` / \`iconSm\`.
- **asChild** — \`true\`면 내용을 버튼 대신 **자식 한 요소**로 렌더(Radix Slot). 링크·커스텀 컴포넌트를 버튼 스타일로 쓸 때 사용.
- **disabled** — 상호작용 불가, 비활성 스타일.
- **children** — 라벨 텍스트, 아이콘, 혼합 콘텐츠.

표준 \`button\` 속성(\`type\`, \`onClick\`, \`aria-*\` 등)은 그대로 전달됩니다.`,
      },
      controls: { include: BUTTON_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "oulinePoint1",
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
      description: "시각적 스타일(variant)",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "full", "icon", "iconSm"],
      description: "크기·패딩",
    },
    asChild: {
      control: "boolean",
      description: "true면 자식 단일 노드로 렌더(Slot)",
    },
    disabled: {
      control: "boolean",
      description: "비활성",
    },
    children: {
      control: "text",
      description: "버튼 텍스트·내용",
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
          <Button size="sm" aria-label="설정">
            <Icon name="more_vert" size={16} className="text-gray-6" />
          </Button>
          <Button size="icon" aria-label="설정">
            <Icon name="more_vert" className="text-gray-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="group hover:text-point-2 "
          >
            <Icon
              name="diamond"
              className="text-gray-6 group-hover:text-point-2"
            />
            수정
          </Button>
          <Button variant="ghost" size="sm" className="group">
            수정
            <Icon
              name="diamond"
              className="text-gray-6 group-hover:text-point-2"
            />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-6">
          Icon + Text (Sprite)
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap items-center">
            <Button
              variant="ghost"
              size="sm"
              className="group text-sm font-bold hover:text-point-2 active:text-point-1"
            >
              <Icon
                name="diamond"
                className="group-hover:text-point-2 group-active:text-point-1 group-disabled:gray-2"
              />
              수정
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="group text-sm font-bold hover:text-point-2 active:text-point-1 disabled:text-gray-2"
              disabled
            >
              <Icon
                name="diamond"
                className="group-hover:text-point-2 group-active:text-point-1 group-disabled:text-gray-2"
              />
              수정
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="group text-sm font-bold hover:text-point-2 active:text-point-1"
            >
              <Icon
                name="ink_eraser"
                className="group-hover:text-point-2 group-active:text-point-1 group-disabled:text-point-3"
              />
              삭제
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="group text-sm font-bold hover:text-point-2 active:text-point-1 disabled:text-gray-2"
              disabled
            >
              <Icon
                name="ink_eraser"
                className="text-point-1 group-hover:text-white group-disabled:text-gray-2"
              />
              삭제
            </Button>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <Button variant="oulinePoint1" className="group text-sm font-bold">
              <Icon
                name="login"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              로그인
            </Button>
            <Button
              variant="oulinePoint1"
              className="group text-sm font-bold"
              disabled
            >
              <Icon
                name="login"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              로그인
            </Button>
            <Button variant="oulinePoint1" className="group text-sm font-bold">
              <Icon
                name="logout"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              로그아웃
            </Button>
            <Button
              variant="oulinePoint1"
              className="group text-sm font-bold"
              disabled
            >
              <Icon
                name="logout"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              로그아웃
            </Button>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <Button variant="oulinePoint1" className="group text-sm font-bold">
              <Icon
                name="login"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              회원가입
            </Button>
            <Button
              variant="oulinePoint1"
              className="group text-sm font-bold"
              disabled
            >
              <Icon
                name="login"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              회원가입
            </Button>
            <Button variant="oulinePoint1" className="group text-sm font-bold">
              <Icon
                name="logout"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              내정보관리
            </Button>
            <Button
              variant="oulinePoint1"
              className="group text-sm font-bold"
              disabled
            >
              <Icon
                name="logout"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              내정보관리
            </Button>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              작품 생성
            </Button>
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
              disabled
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              작품 생성
            </Button>
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              작품 목록
            </Button>
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
              disabled
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              작품 목록
            </Button>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              내역 추가
            </Button>
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
              disabled
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              내역 추가
            </Button>
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              내역 추가
            </Button>
            <Button
              variant="oulinePoint1"
              className="group rounded-full text-sm font-bold"
              disabled
            >
              <Icon
                name="search_activity"
                className="text-point-1 group-hover:text-white group-disabled:text-point-3"
              />
              내역 추가
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
