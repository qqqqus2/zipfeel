"use client";

import React from "react";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

// 임시 데이터 - 흐름순
const mockEventsFlow = [
    {
        id: 1,
        title: "주인공의 각성",
        sequence: 1,
        description: "주인공이 숨겨진 능력을 발견하는 중요한 순간",
        relatedCharacters: ["주인공", "스승"],
        location: "고대 유적",
        status: "완료",
    },
    {
        id: 2,
        title: "첫 번째 시련",
        sequence: 2,
        description: "각성 후 처음으로 맞이하는 큰 위기",
        relatedCharacters: ["주인공", "조력자"],
        location: "어둠의 숲",
        status: "진행중",
    },
    {
        id: 3,
        title: "진실의 발견",
        sequence: 3,
        description: "세계의 숨겨진 진실을 알게 되는 전환점",
        relatedCharacters: ["주인공", "멘토", "적대자"],
        location: "도서관",
        status: "예정",
    },
];

// 임시 데이터 - 시간순
const mockEventsTime = [
    {
        id: 1,
        title: "주인공의 각성",
        time: "Day 1, 10:00",
        description: "주인공이 숨겨진 능력을 발견하는 중요한 순간",
        relatedCharacters: ["주인공", "스승"],
        location: "고대 유적",
        status: "완료",
    },
    {
        id: 2,
        title: "첫 번째 시련",
        time: "Day 3, 14:00",
        description: "각성 후 처음으로 맞이하는 큰 위기",
        relatedCharacters: ["주인공", "조력자"],
        location: "어둠의 숲",
        status: "진행중",
    },
    {
        id: 3,
        title: "진실의 발견",
        time: "Day 7, 20:00",
        description: "세계의 숨겨진 진실을 알게 되는 전환점",
        relatedCharacters: ["주인공", "멘토", "적대자"],
        location: "도서관",
        status: "예정",
    },
];

const getStatusColor = (status) => {
    switch (status) {
        case "완료":
            return "text-sub-8 bg-sub-8/10";
        case "진행중":
            return "text-point-2 bg-point-2/10";
        case "예정":
            return "text-gray-5 bg-gray-2";
        default:
            return "text-gray-5 bg-gray-2";
    }
};

// 흐름순 탭 콘텐츠
function FlowOrderContent() {
    const scrollContainerRef = React.useRef(null);
    const [focusedTextarea, setFocusedTextarea] = React.useState(null);

    return (
        <div className="flex flex-col md:h-full w-full max-w-[678px] mx-auto overflow-x-hidden">
            {/* 고정 헤더 영역 */}
            <div className="flex-shrink-0 w-full px-0 md:px-6 pt-6">
                <div className="flex justify-between items-center mb-6">
                    <span>000 개 파트</span>
                    <div className="flex gap-2">
                        <Button
                            variant="oulinePoint1"
                            rounded="full"
                            size="sm"
                            className="gap-2 min-w-[100px] hidden md:block text-sm font-semibold shadow-sm group"
                        >
                            <Icon name="clear_all" size={20} className="group-hover:text-white transition-colors" />
                            <span data-eng="Filter">A라인 관리</span>
                        </Button>
                        <Button
                            variant="oulinePoint1"
                            rounded="full"
                            size="sm"
                            className="gap-2 min-w-[100px] text-sm font-semibold shadow-sm"
                        >
                            <Icon name="add" size={20} />
                            <span data-eng="Create">A라인 추가</span>
                        </Button>
                        <Button
                            variant="oulinePoint1"
                            rounded="full"
                            size="sm"
                            className="gap-2 min-w-[100px] text-sm font-semibold shadow-sm"
                        >
                            <Icon name="add" size={20} />
                            <span data-eng="Create">B라인 추가</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* 스크롤 가능한 콘텐츠 영역 */}
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto w-full"
            >
                <div className="w-full md:px-6 px-0 pb-6">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={`event-${mockEventsFlow[0].id}`}
                        className="w-full border-t-1 border-t-gray-2"
                    >
                        {mockEventsFlow.map((event) => (
                            <AccordionItem
                                key={event.id}
                                value={`event-${event.id}`}
                                className="bg-white even:bg-[#F5F5F5] border-0 gap-0 mb-0 border-b-1 border-b-gray-2"
                            >
                                <AccordionTrigger className="group">
                                    <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                                        <div className="flex items-center gap-2 w-full">
                                            <span className="text-xs text-gray-6">
                                                81~100
                                            </span>
                                            <span className="text-xs text-gray-5">
                                                ·
                                            </span>
                                            <span className="text-xs text-gray-6">
                                                A타입
                                            </span>
                                            <span className="text-xs text-gray-5">
                                                ·
                                            </span>
                                            <span className="text-xs text-gray-6 line-clamp-1 flex-1">
                                                도시 연쇄 실종사건과 정체불명
                                                조직의 개입
                                            </span>
                                        </div>
                                        <span className="text-base font-semibold text-gray-6 w-full text-left line-clamp-1 md:line-clamp-none">
                                            주인공의 사라진 동생 수색
                                        </span>
                                    </div>
                                    <span
                                        className="ml-auto mr-2 flex gap-2 shrink-0"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span
                                            className="inline-flex items-center justify-center w-6 h-6 cursor-pointer hover:bg-gray-100 rounded transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // 수정 기능
                                            }}
                                        >
                                            <Icon name="diamond" size={20} />
                                        </span>
                                        <span
                                            className="inline-flex items-center justify-center w-6 h-6 cursor-pointer hover:bg-gray-100 rounded transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // 삭제 기능
                                            }}
                                        >
                                            <Icon name="ink_eraser" size={20} />
                                        </span>
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="p-5 flex flex-wrap gap-5">
                                        <div
                                            className={`w-full md:w-[calc(50%-10px)] rounded-lg overflow-hidden transition-all ${
                                                focusedTextarea === `${event.id}-81`
                                                    ? "border-2 border-point-1 bg-white"
                                                    : "border-1 border-[rgba(71,69,84,0.6)] bg-transparent"
                                            }`}
                                        >
                                            {/* 헤더 */}
                                            <div className="flex items-center justify-between px-3 py-2 ">
                                                <span className="text-sm font-semibold text-gray-6">
                                                    <span className="font-regular">
                                                        회차
                                                    </span>{" "}
                                                    81
                                                </span>
                                                <span className="text-sm text-gray-5">
                                                    45.0 %
                                                </span>
                                            </div>
                                            {/* Textarea */}
                                            <textarea
                                                className="w-full min-h-[200px] p-3 text-base font-semibold text-gray-6 bg-transparent border-0 resize-none focus:outline-none"
                                                placeholder="사건 내용을 입력하세요..."
                                                defaultValue={event.description}
                                                onFocus={() => setFocusedTextarea(`${event.id}-81`)}
                                                onBlur={() => setFocusedTextarea(null)}
                                            />
                                        </div>
                                        <div
                                            className={`w-full md:w-[calc(50%-10px)] rounded-lg overflow-hidden transition-all ${
                                                focusedTextarea === `${event.id}-82`
                                                    ? "border-2 border-point-1 bg-white"
                                                    : "border-1 border-[rgba(71,69,84,0.6)] bg-transparent"
                                            }`}
                                        >
                                            {/* 헤더 */}
                                            <div className="flex items-center justify-between px-3 py-2 ">
                                                <span className="text-sm font-semibold text-gray-6">
                                                    <span className="font-regular">
                                                        회차
                                                    </span>{" "}
                                                    82
                                                </span>
                                                <span className="text-sm text-gray-5">
                                                    45.0 %
                                                </span>
                                            </div>
                                            {/* Textarea */}
                                            <textarea
                                                className="w-full min-h-[200px] p-3 text-base font-semibold text-gray-6 bg-transparent border-0 resize-none focus:outline-none"
                                                placeholder="사건 내용을 입력하세요..."
                                                defaultValue={event.description}
                                                onFocus={() => setFocusedTextarea(`${event.id}-82`)}
                                                onBlur={() => setFocusedTextarea(null)}
                                            />
                                        </div>
                                        <div
                                            className={`w-full md:w-[calc(50%-10px)] rounded-lg overflow-hidden transition-all ${
                                                focusedTextarea === `${event.id}-83`
                                                    ? "border-2 border-point-1 bg-white"
                                                    : "border-1 border-[rgba(71,69,84,0.6)] bg-transparent"
                                            }`}
                                        >
                                            {/* 헤더 */}
                                            <div className="flex items-center justify-between px-3 py-2 ">
                                                <span className="text-sm font-semibold text-gray-6">
                                                    <span className="font-regular">
                                                        회차
                                                    </span>{" "}
                                                    83
                                                </span>
                                                <span className="text-sm text-gray-5">
                                                    45.0 %
                                                </span>
                                            </div>
                                            {/* Textarea */}
                                            <textarea
                                                className="w-full min-h-[200px] p-3 text-base font-semibold text-gray-6 bg-transparent border-0 resize-none focus:outline-none"
                                                placeholder="사건 내용을 입력하세요..."
                                                defaultValue={event.description}
                                                onFocus={() => setFocusedTextarea(`${event.id}-83`)}
                                                onBlur={() => setFocusedTextarea(null)}
                                            />
                                        </div>
                                        <div
                                            className={`w-full md:w-[calc(50%-10px)] rounded-lg overflow-hidden transition-all ${
                                                focusedTextarea === `${event.id}-84`
                                                    ? "border-2 border-point-1 bg-white"
                                                    : "border-1 border-[rgba(71,69,84,0.6)] bg-transparent"
                                            }`}
                                        >
                                            {/* 헤더 */}
                                            <div className="flex items-center justify-between px-3 py-2 ">
                                                <span className="text-sm font-semibold text-gray-6">
                                                    <span className="font-regular">
                                                        회차
                                                    </span>{" "}
                                                    84
                                                </span>
                                                <span className="text-sm text-gray-5">
                                                    45.0 %
                                                </span>
                                            </div>
                                            {/* Textarea */}
                                            <textarea
                                                className="w-full min-h-[200px] p-3 text-base font-semibold text-gray-6 bg-transparent border-0 resize-none focus:outline-none"
                                                placeholder="사건 내용을 입력하세요..."
                                                defaultValue={event.description}
                                                onFocus={() => setFocusedTextarea(`${event.id}-84`)}
                                                onBlur={() => setFocusedTextarea(null)}
                                            />
                                        </div>
                                        <div
                                            className={`w-full md:w-[calc(50%-10px)] rounded-lg overflow-hidden transition-all ${
                                                focusedTextarea === `${event.id}-85`
                                                    ? "border-2 border-point-1 bg-white"
                                                    : "border-1 border-[rgba(71,69,84,0.6)] bg-transparent"
                                            }`}
                                        >
                                            {/* 헤더 */}
                                            <div className="flex items-center justify-between px-3 py-2 ">
                                                <span className="text-sm font-semibold text-gray-6">
                                                    <span className="font-regular">
                                                        회차
                                                    </span>{" "}
                                                    85
                                                </span>
                                                <span className="text-sm text-gray-5">
                                                    45.0 %
                                                </span>
                                            </div>
                                            {/* Textarea */}
                                            <textarea
                                                className="w-full min-h-[200px] p-3 text-base font-semibold text-gray-6 bg-transparent border-0 resize-none focus:outline-none"
                                                placeholder="사건 내용을 입력하세요..."
                                                defaultValue={event.description}
                                                onFocus={() => setFocusedTextarea(`${event.id}-85`)}
                                                onBlur={() => setFocusedTextarea(null)}
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

// 시간순 탭 콘텐츠
function TimeOrderContent() {
    return <div></div>;
}

export default function EventManagement() {
    const tabs = [
        {
            value: "flow",
            label: "흐름순",
            content: <FlowOrderContent />,
        },
        {
            value: "time",
            label: "시간순",
            content: <TimeOrderContent />,
        },
    ];

    return (
        <CommonLayout
            title="사건 관리"
            showTabs={true}
            tabs={tabs}
            defaultTab="flow"
            showMobileTabs={true}
        />
    );
}
