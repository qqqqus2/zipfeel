import React from "react";

import { HexagonChart, DEFAULT_DATA } from "./hexagon-chart";

const HEXAGON_CHART_DOC_PROPS = [
    "data",
    "max",
    "gridLevels",
    "showLegend",
    "legendLabelMaxWidth",
    "size",
];

const meta = {
    title: "UI/HexagonChart",
    component: HexagonChart,
    parameters: {
        layout: "padded",
        controls: { include: HEXAGON_CHART_DOC_PROPS },
        docs: {
            description: {
                component: `### 육각형(레이더) 차트

- **data** — \`{ label, value, delta? }\` 배열(최대 6개). 시계 방향: 상단부터 배치.
- **max** — 축 최대값(기본 100).
- **gridLevels** — 격자 단계 수(기본 5).
- **showLegend** — 하단 수치 목록 표시.
- **legendLabelMaxWidth** — 하단 범례 라벨 말줄임(\`truncate\`) 최대 너비(px). 차트 꼭짓점 라벨은 전체 표시.
- **size** — 차트 SVG 기준 크기.

외부 차트 라이브러리 없이 SVG로 그립니다. Hover 없음. 보정(\`delta\`)은 하단 범례에 \`+/-\`로 표시합니다.`,
            },
            controls: { include: HEXAGON_CHART_DOC_PROPS },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        max: { control: { type: "number", min: 1 }, description: "축 최대값" },
        gridLevels: {
            control: { type: "number", min: 1, max: 10 },
            description: "격자 단계",
        },
        showLegend: {
            control: "boolean",
            description: "하단 데이터 목록",
        },
        legendLabelMaxWidth: {
            control: { type: "number", min: 32, max: 160 },
            description: "범례 라벨 말줄임 너비(px)",
        },
        size: {
            control: { type: "number", min: 160, max: 320 },
            description: "차트 크기",
        },
        data: { control: false },
    },
};

export default meta;

export const Default = {
    name: "육각형 세팅 예시",
    render: () => (
        <div className="mx-auto w-full min-w-0 max-w-[320px] rounded-lg bg-gray-1 p-4">
            <HexagonChart data={DEFAULT_DATA} />
        </div>
    ),
};

export const WithCorrection = {
    name: "보정 적용 (+/-)",
    render: () => (
        <div className="mx-auto w-full min-w-0 max-w-[320px] rounded-lg bg-gray-1 p-4">
            <HexagonChart
                data={[
                    { label: "외모", value: 34, delta: 5 },
                    { label: "성격", value: 65, delta: -3 },
                    { label: "학력", value: 92, delta: 0 },
                    { label: "직업", value: 92 },
                    { label: "자산", value: 85, delta: 12 },
                    { label: "집안", value: 79, delta: -2 },
                ]}
            />
        </div>
    ),
};

export const LegendEllipsis = {
    name: "범례 말줄임",
    render: () => (
        <div className="mx-auto w-full min-w-0 max-w-[320px] rounded-lg bg-gray-1 p-4">
            <HexagonChart
                legendLabelMaxWidth={72}
                data={[
                    { label: "매우 긴 항목명 예시", value: 50 },
                    { label: "성격 및 태도", value: 70 },
                    { label: "학력", value: 80 },
                    { label: "직업", value: 60 },
                    { label: "자산", value: 90 },
                    { label: "집안", value: 75 },
                ]}
            />
        </div>
    ),
};

export const WithoutLegend = {
    name: "범례 숨김",
    render: () => (
        <div className="mx-auto w-full min-w-0 max-w-[280px] rounded-lg bg-gray-1 p-4">
            <HexagonChart data={DEFAULT_DATA} showLegend={false} />
        </div>
    ),
};
