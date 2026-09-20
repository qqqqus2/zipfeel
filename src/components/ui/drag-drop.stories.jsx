"use client";

import * as React from "react";
import { DragDropBoard } from "./drag-drop";

const DRAG_DROP_DOC_PROPS = ["containers", "onContainersChange", "className"];

const meta = {
    title: "UI/DragDrop",
    component: DragDropBoard,
    parameters: {
        layout: "padded",
        controls: { include: DRAG_DROP_DOC_PROPS },
        docs: {
            description: {
                component: `### 주요 props

- **containers** — 칸반 컬럼 배열: \`{ id, title, description?, items: [{ id, title, ... }] }\`.
- **onContainersChange** — 드래그 앤 드롭 후 다음 상태로 갱신하는 콜백.
- **className** — 보드 루트 \`className\`.`,
            },
            controls: { include: DRAG_DROP_DOC_PROPS },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        containers: {
            control: false,
            description:
                "칸반 컬럼 배열: { id, title, description?, items: [{ id, title, ... }] }",
        },
        onContainersChange: {
            control: false,
            description: "드래그 후 다음 상태로 갱신",
        },
        className: {
            control: "text",
            description: "보드 루트 className",
        },
    },
};

export default meta;

function SingleColumn() {
    const [containers, setContainers] = React.useState([
        {
            id: "column-1",
            title: "컬럼",
            description: "드래그로 순서 변경",
            variant: "list",
            handlePlacement: "end",
            items: [
                { id: "i-1", title: "내용", meta: "", checked: true },
                { id: "i-2", title: "내용", meta: "", checked: false },
                {
                    id: "i-3",
                    title: "체크박스는 Left Pannel 및 Preview를 통해서만 설정 가능",
                    meta: "",
                    checked: false,
                },
                {
                    id: "i-4",
                    title: "체크박스는 최대 30개까지 등록 가능하며 Check에 따라 Progress를 제네페이지가 자동 계산됨 - 체크 수 / 전체 수",
                    meta: "",
                    checked: true,
                },
                {
                    id: "i-5",
                    title: "Drag & Drop 시 번호는 자동으로 변경",
                    meta: "",
                    checked: false,
                },
                {
                    id: "i-6",
                    title: "요금제별로 신규 추가 가능 건 수 다름: 무료 3 / 유료 10 / 센서 30",
                    meta: "",
                    checked: true,
                },
            ],
        },
    ]);

    return (
        <div className="mx-auto w-full max-w-lg py-8">
            <DragDropBoard
                containers={containers}
                onContainersChange={setContainers}
            />
        </div>
    );
}

function WithDisabledItems() {
    const [containers, setContainers] = React.useState([
        {
            id: "column-1",
            title: "드래그 가능 / 불가능 아이템",
            description: "일부 아이템은 드래그 불가능",
            variant: "list",
            handlePlacement: "end",
            items: [
                {
                    id: "i-1",
                    title: "드래그 가능한 아이템 1",
                    meta: "",
                    checked: true,
                },
                {
                    id: "i-2",
                    title: "드래그 불가능한 아이템",
                    meta: "disabled: true",
                    disabled: true,
                    checked: false,
                },
                {
                    id: "i-3",
                    title: "드래그 가능한 아이템 2",
                    meta: "",
                    checked: false,
                },
                {
                    id: "i-4",
                    title: "드래그 불가능한 아이템 2",
                    meta: "disabled: true",
                    disabled: true,
                    checked: true,
                },
                {
                    id: "i-5",
                    title: "드래그 가능한 아이템 3",
                    meta: "",
                    checked: false,
                },
                {
                    id: "i-6",
                    title: "드래그 가능한 아이템 4",
                    meta: "",
                    checked: true,
                },
            ],
        },
    ]);

    return (
        <div className="mx-auto w-full max-w-lg py-8">
            <DragDropBoard
                containers={containers}
                onContainersChange={setContainers}
            />
        </div>
    );
}

export const Default = {
    render: () => <SingleColumn />,
    parameters: {
        // layout: "padded",
    },
};

export const WithDisabled = {
    render: () => <WithDisabledItems />,
    parameters: {
        // layout: "padded",
    },
};
