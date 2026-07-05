"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

// 더미 데이터 (20개의 에피소드)
const episodesData = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    episode: i + 1,
    character: `캐릭터 ${i + 1}`,
    status: i % 3 === 0 ? "진행중" : i % 3 === 1 ? "완료" : "대기",
    content: `에피소드 ${i + 1}의 상세 내용입니다. 이 부분에는 캐릭터의 등장 장면, 대사, 행동 등이 포함됩니다.`,
}));

// 캐릭터 설정 탭 콘텐츠
function CharacterSettingsContent() {
    return (
        <div className="flex gap-6 w-full max-w-none h-full">
            {/* 좌측 영역 */}
            <div className="w-[305px] shrink-0 hidden lg:block">
                <div className="h-full bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-500">좌측 컴포넌트 영역</p>
                </div>
            </div>

            {/* 중앙 콘텐츠 */}
            <div className="w-full lg:w-[630px] shrink-0 space-y-6 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-6">
                            캐릭터 프로필 관리
                        </h3>
                        <p className="text-sm text-gray-5 mt-1">
                            작품 속 캐릭터들의 상세 정보를 관리합니다
                        </p>
                    </div>
                    <Button variant="point1" className="gap-2">
                        <Icon name="add" size={20} />새 캐릭터 추가
                    </Button>
                </div>

                <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                        character-list에서 넘어온 캐릭터 상세 정보 표시 영역
                    </p>
                </div>
            </div>

            {/* 우측 영역 */}
            <div className="w-[305px] shrink-0 hidden lg:block flex flex-col">
                <div className="overflow-y-auto custom-scrollbar">
                    <Accordion
                        type="multiple"
                        defaultValue={episodesData
                            .slice(0, 3)
                            .map((ep) => `episode-${ep.id}`)}
                        className="w-full"
                    >
                        {episodesData.map((episode) => (
                            <AccordionItem
                                key={episode.id}
                                value={`episode-${episode.id}`}
                            >
                                <AccordionTrigger>
                                    <span className="text-sm fw-semibold text-gray-6">
                                        {episode.episode
                                            .toString()
                                            .padStart(4, "0")}{" "}
                                        화 · {episode.character}(
                                        {episode.status})
                                    </span>
                                    <div
                                        className="ml-auto flex gap-2"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="w-6 h-6 p-0"
                                        >
                                            <Icon name="diamond" size={20} />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="w-6 h-6 p-0"
                                        >
                                            <Icon name="ink_eraser" size={20} />
                                        </Button>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="px-[15px] text-sm text-gray-6">
                                        {episode.content}
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

// 캐릭터 비교 탭 콘텐츠
function CharacterComparisonContent() {
    return (
        <div className="flex gap-6 w-full max-w-none h-full">
            {/* 좌측 영역 */}
            <div className="w-[305px] shrink-0 hidden lg:block">
                <div className="h-full bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-500">좌측 컴포넌트 영역</p>
                </div>
            </div>

            {/* 중앙 콘텐츠 */}
            <div className="w-full lg:w-[630px] shrink-0 space-y-6">
                <p className="text-sm text-gray-500">Empty</p>
            </div>

            {/* 우측 영역 */}
            <div className="w-[305px] shrink-0 hidden lg:block">
                <div className="h-full bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-500">우측 컴포넌트 영역</p>
                </div>
            </div>
        </div>
    );
}

// 공통 설정 관리 탭 콘텐츠
function CommonSettingsContent() {
    return (
        <div className="flex gap-6 w-full max-w-none h-full">
            {/* 좌측 영역 */}
            <div className="w-[305px] shrink-0 hidden lg:block">
                <div className="h-full bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-500">좌측 컴포넌트 영역</p>
                </div>
            </div>

            {/* 중앙 콘텐츠 */}
            <div className="w-full lg:w-[630px] shrink-0 space-y-6">
                <p className="text-sm text-gray-500">Empty</p>
            </div>

            {/* 우측 영역 */}
            <div className="w-[305px] shrink-0 hidden lg:block">
                <div className="h-full bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-500">우측 컴포넌트 영역</p>
                </div>
            </div>
        </div>
    );
}

export default function CharacterSettings() {
    const tabs = [
        {
            value: "settings",
            label: "캐릭터 설정",
            content: <CharacterSettingsContent />,
        },
        {
            value: "comparison",
            label: "캐릭터 비교",
            content: <CharacterComparisonContent />,
        },
        {
            value: "common",
            label: "공통 설정 관리",
            content: <CommonSettingsContent />,
        },
    ];

    return (
        <CommonLayout
            title="인물 관리"
            description="작중 출연하는 캐릭터를 생성·관리 할 수 있습니다, 각 항목을 눌러 수정할 수 있으며 저장 버튼을 누르면 즉시 반영되니 참고하세요."
            showTabs={true}
            tabs={tabs}
            defaultTab="settings"
        />
    );
}
