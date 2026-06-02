import React, { useState } from "react";
import { ListPanel } from "./list-panel";

export default {
    title: "Components/ListPanel",
    component: ListPanel,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

const defaultItems = [
    { id: "1", content: "첫 번째 항목" },
    { id: "2", content: "두 번째 항목" },
    { id: "3", content: "세 번째 항목" },
    { id: "4", content: "네 번째 항목" },
    { id: "5", content: "다섯 번째 항목" },
];

export const Default = {
    render: () => {
        const [items, setItems] = useState(defaultItems);

        return (
            <ListPanel
                items={items}
                onItemsChange={setItems}
                title="드래그 앤 드롭 리스트"
                description="항목을 드래그하여 순서를 변경하세요."
            />
        );
    },
};

export const WithoutHeader = {
    render: () => {
        const [items, setItems] = useState(defaultItems);

        return <ListPanel items={items} onItemsChange={setItems} />;
    },
};

export const EmptyState = {
    render: () => {
        const [items, setItems] = useState([]);

        return (
            <ListPanel
                items={items}
                onItemsChange={setItems}
                title="빈 리스트"
                description="항목을 추가하세요."
            />
        );
    },
};

export const WithDisabledItems = {
    render: () => {
        const [items, setItems] = useState([
            { id: "1", content: "드래그 가능한 항목" },
            { id: "2", content: "비활성화된 항목", disabled: true },
            { id: "3", content: "드래그 가능한 항목" },
            { id: "4", content: "비활성화된 항목", disabled: true },
            { id: "5", content: "드래그 가능한 항목" },
        ]);

        return (
            <ListPanel
                items={items}
                onItemsChange={setItems}
                title="일부 비활성화"
                description="회색 항목은 드래그할 수 없습니다."
            />
        );
    },
};

export const ManyItems = {
    render: () => {
        const manyItems = Array.from({ length: 15 }, (_, i) => ({
            id: `item-${i + 1}`,
            content: `항목 ${i + 1}`,
        }));

        const [items, setItems] = useState(manyItems);

        return (
            <ListPanel
                items={items}
                onItemsChange={setItems}
                title="많은 항목"
                description="스크롤이 필요한 긴 리스트"
                className="max-h-[500px] overflow-y-auto"
            />
        );
    },
};

export const CustomContent = {
    render: () => {
        const [items, setItems] = useState([
            {
                id: "1",
                content: (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-point-1">⭐</span>
                        <span>중요한 항목</span>
                    </div>
                ),
            },
            {
                id: "2",
                content: (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-blue-500">📝</span>
                        <span>메모 항목</span>
                    </div>
                ),
            },
            {
                id: "3",
                content: (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-green-500">✓</span>
                        <span>완료된 항목</span>
                    </div>
                ),
            },
        ]);

        return (
            <ListPanel
                items={items}
                onItemsChange={setItems}
                title="커스텀 콘텐츠"
                description="아이콘과 스타일이 있는 항목"
            />
        );
    },
};
