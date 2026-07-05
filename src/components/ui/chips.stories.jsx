import React from "react";
import { Chips } from "./chips";

const CHIPS_DOC_PROPS = ["variant", "children"];

const meta = {
    title: "UI/Chips",
    component: Chips,
    parameters: {
        layout: "centered",
        controls: { include: CHIPS_DOC_PROPS },
        docs: {
            description: {
                component: `### 주요 props

- **variant** — 색상 스타일. \`point\`, \`white\`, \`orange\`.
- **children** — 칩 내부 텍스트 콘텐츠.

칩 컴포넌트는 태그나 상태 표시에 사용됩니다. 높이 30px, 좌우 패딩 20px, 폰트 크기 12px, 둥근 모서리 20px, 테두리 1px로 구성됩니다.`,
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["point", "white", "orange"],
            description: "칩의 색상 스타일",
            table: {
                defaultValue: { summary: "point" },
            },
        },
        children: {
            control: "text",
            description: "칩 내부 텍스트",
        },
    },
};

export default meta;

export const Default = {
    args: {
        variant: "point",
        children: "칩 텍스트",
    },
};

export const Point = {
    args: {
        variant: "point",
        children: "포인트",
    },
    parameters: {
        docs: {
            description: {
                story: "point-1 색상의 테두리와 텍스트를 가진 칩입니다.",
            },
        },
    },
};

export const White = {
    args: {
        variant: "white",
        children: "화이트",
    },
    parameters: {
        backgrounds: { default: "dark" },
        docs: {
            description: {
                story: "흰색 테두리와 텍스트를 가진 칩입니다. 어두운 배경에서 사용하기 적합합니다.",
            },
        },
    },
};

export const Orange = {
    args: {
        variant: "orange",
        children: "오렌지",
    },
    parameters: {
        docs: {
            description: {
                story: "#FFBA41 색상의 테두리와 텍스트를 가진 칩입니다.",
            },
        },
    },
};

export const AllVariants = {
    render: () => (
        <div className="flex flex-wrap gap-4 items-center">
            <Chips variant="point">포인트</Chips>
            <div className="bg-gray-6 p-4 rounded">
                <Chips variant="white">화이트</Chips>
            </div>
            <Chips variant="orange">오렌지</Chips>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "모든 칩 변형을 한눈에 볼 수 있습니다.",
            },
        },
    },
};

export const LongText = {
    args: {
        variant: "point",
        children: "긴 텍스트가 들어간 칩 예시",
    },
    parameters: {
        docs: {
            description: {
                story: "긴 텍스트가 포함된 칩 예시입니다.",
            },
        },
    },
};
