"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

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
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-6">
                        사건 흐름 타임라인
                    </h3>
                    <p className="text-sm text-gray-5 mt-1">
                        스토리 진행 순서대로 사건을 관리합니다
                    </p>
                </div>
                <Button variant="point1" className="gap-2">
                    <Icon name="add" size={20} />
                    새 사건 추가
                </Button>
            </div>

            <div className="space-y-4">
                {mockEventsFlow.map((event, index) => (
                    <div key={event.id} className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-point-2 text-white flex items-center justify-center font-bold">
                                {event.sequence}
                            </div>
                            {index < mockEventsFlow.length - 1 && (
                                <div className="w-0.5 flex-1 bg-gray-3 mt-2" />
                            )}
                        </div>

                        <Card className="flex-1">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <CardTitle className="text-base">
                                        {event.title}
                                    </CardTitle>
                                    <span
                                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}
                                    >
                                        {event.status}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-6 mb-4">
                                    {event.description}
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-gray-5">
                                        <Icon name="group" size={16} />
                                        <span>
                                            관련 인물:{" "}
                                            {event.relatedCharacters.join(
                                                ", ",
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-5">
                                        <Icon name="location_on" size={16} />
                                        <span>장소: {event.location}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-2">
                                    <Button size="sm" variant="outline">
                                        수정
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                        삭제
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 시간순 탭 콘텐츠
function TimeOrderContent() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-6">
                        시간 기반 타임라인
                    </h3>
                    <p className="text-sm text-gray-5 mt-1">
                        작품 내 시간 순서대로 사건을 관리합니다
                    </p>
                </div>
                <Button variant="point1" className="gap-2">
                    <Icon name="add" size={20} />
                    새 사건 추가
                </Button>
            </div>

            <div className="space-y-4">
                {mockEventsTime.map((event) => (
                    <Card key={event.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-sm font-medium text-point-2 bg-point-2/10 px-2 py-1 rounded">
                                            {event.time}
                                        </span>
                                        <span
                                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}
                                        >
                                            {event.status}
                                        </span>
                                    </div>
                                    <CardTitle className="text-base">
                                        {event.title}
                                    </CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-6 mb-4">
                                {event.description}
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-5">
                                    <Icon name="group" size={16} />
                                    <span>
                                        관련 인물:{" "}
                                        {event.relatedCharacters.join(", ")}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-5">
                                    <Icon name="location_on" size={16} />
                                    <span>장소: {event.location}</span>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-2">
                                <Button size="sm" variant="outline">
                                    수정
                                </Button>
                                <Button size="sm" variant="ghost">
                                    삭제
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
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
            description="작품 속 사건 및 플롯을 체계적으로 관리하세요"
            showTabs={true}
            tabs={tabs}
            defaultTab="flow"
        />
    );
}
