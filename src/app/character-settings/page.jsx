"use client";

import { useState } from "react";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { ListPanel } from "@/components/ui/list-panel";

// 임시 데이터 - 캐릭터 목록
const mockCharacters = [
    {
        id: 1,
        name: "이한결",
        role: "주인공",
        age: 28,
        personality: "냉철하고 분석적이지만 내면에는 따뜻함을 지닌 인물",
        background: "전직 형사로 특별한 사건을 계기로 새로운 능력을 얻게 됨",
        motivation: "과거의 사건을 해결하고 진실을 밝히고자 함",
        relationships: ["정미래 (동료)", "강태식 (멘토)"],
        status: "활성",
    },
    {
        id: 2,
        name: "정미래",
        role: "조력자",
        age: 26,
        personality: "밝고 긍정적이며 직관력이 뛰어남",
        background: "프리랜서 기자로 진실을 추구하는 열정가",
        motivation: "사회의 부조리를 고발하고 정의를 실현하고자 함",
        relationships: ["이한결 (동료)", "박준서 (라이벌)"],
        status: "활성",
    },
    {
        id: 3,
        name: "강태식",
        role: "멘토",
        age: 55,
        personality: "엄격하지만 제자들을 깊이 아끼는 베테랑",
        background: "30년 경력의 전설적인 형사",
        motivation: "후배들에게 올바른 길을 가르치고자 함",
        relationships: ["이한결 (제자)", "정미래 (조언자)"],
        status: "활성",
    },
];

// 임시 데이터 - 공통 설정
const mockCommonSettings = [
    {
        id: 1,
        category: "성격 유형",
        items: ["MBTI", "에니어그램", "혈액형"],
    },
    {
        id: 2,
        category: "능력치",
        items: ["체력", "지능", "매력", "운"],
    },
    {
        id: 3,
        category: "관계 유형",
        items: ["친구", "적", "연인", "가족", "동료", "라이벌"],
    },
];

const getRoleColor = (role) => {
    switch (role) {
        case "주인공":
            return "text-point-1 bg-point-1/10";
        case "조력자":
            return "text-sub-8 bg-sub-8/10";
        case "멘토":
            return "text-point-2 bg-point-2/10";
        case "적대자":
            return "text-red-500 bg-red-500/10";
        default:
            return "text-gray-5 bg-gray-2";
    }
};

// 캐릭터 설정 탭 콘텐츠
function CharacterSettingsContent() {
    const [rightPanelItems, setRightPanelItems] = useState([
        { id: "1", content: "주인공" },
        { id: "2", content: "조력자" },
        { id: "3", content: "멘토" },
    ]);

    return (
        <div className="flex gap-6 h-[calc(100vh-200px)]">
            {/* 좌측 빈 영역 */}
            <div className="w-[300px] shrink-0 hidden min-[1500px]:block"></div>

            {/* 중앙 콘텐츠 */}
            <div className="w-[630px] shrink-0 space-y-6 min-[1500px]:mx-0 mx-auto overflow-y-auto custom-scrollbar">
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
                        <Icon name="add" size={20} />
                        새 캐릭터 추가
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockCharacters.map((character) => (
                    <Card key={character.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CardTitle className="text-lg">
                                            {character.name}
                                        </CardTitle>
                                        <span
                                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getRoleColor(character.role)}`}
                                        >
                                            {character.role}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-5">
                                        {character.age}세
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-6 mb-1">
                                        성격
                                    </h4>
                                    <p className="text-sm text-gray-5">
                                        {character.personality}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-semibold text-gray-6 mb-1">
                                        배경
                                    </h4>
                                    <p className="text-sm text-gray-5">
                                        {character.background}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-semibold text-gray-6 mb-1">
                                        동기
                                    </h4>
                                    <p className="text-sm text-gray-5">
                                        {character.motivation}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-semibold text-gray-6 mb-1 flex items-center gap-1">
                                        <Icon name="group" size={14} />
                                        관계
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {character.relationships.map(
                                            (rel, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-gray-1 text-gray-6 px-2 py-1 rounded"
                                                >
                                                    {rel}
                                                </span>
                                            ),
                                        )}
                                    </div>
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

            {/* 우측 ListPanel */}
            <div className="w-[300px] shrink-0 hidden min-[1500px]:block overflow-y-auto custom-scrollbar">
                <ListPanel
                    items={rightPanelItems}
                    onItemsChange={setRightPanelItems}
                    title="역할 분류"
                    description="드래그하여 순서 변경"
                />
            </div>
        </div>
    );
}

// 캐릭터 비교 탭 콘텐츠
function CharacterComparisonContent() {
    const [leftPanelItems, setLeftPanelItems] = useState([
        { id: "1", content: "이한결" },
        { id: "2", content: "정미래" },
        { id: "3", content: "강태식" },
    ]);

    const [rightPanelItems, setRightPanelItems] = useState([
        { id: "1", content: "성격 비교" },
        { id: "2", content: "능력 비교" },
        { id: "3", content: "관계 비교" },
    ]);

    return (
        <div className="flex gap-6 h-[calc(100vh-200px)]">
            {/* 좌측 ListPanel */}
            <div className="w-[300px] shrink-0 hidden min-[1500px]:block overflow-y-auto custom-scrollbar">
                <ListPanel
                    items={leftPanelItems}
                    onItemsChange={setLeftPanelItems}
                    title="비교 대상"
                    description="드래그하여 순서 변경"
                />
            </div>

            {/* 중앙 콘텐츠 */}
            <div className="w-[630px] shrink-0 space-y-6 min-[1500px]:mx-0 mx-auto overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-6">
                        캐릭터 비교 분석
                    </h3>
                    <p className="text-sm text-gray-5 mt-1">
                        여러 캐릭터를 한눈에 비교하고 분석합니다
                    </p>
                </div>
                <Button variant="outline" className="gap-2">
                    <Icon name="compare_arrows" size={20} />
                    비교할 캐릭터 선택
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>비교 대상 캐릭터</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-2">
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-6">
                                        항목
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-6">
                                        이한결
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-6">
                                        정미래
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-6">
                                        강태식
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-2">
                                    <td className="py-3 px-4 text-sm font-medium text-gray-6">
                                        역할
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        주인공
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        조력자
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        멘토
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-2">
                                    <td className="py-3 px-4 text-sm font-medium text-gray-6">
                                        나이
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        28세
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        26세
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        55세
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-2">
                                    <td className="py-3 px-4 text-sm font-medium text-gray-6">
                                        성격
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        냉철하고 분석적
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        밝고 긍정적
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        엄격하지만 자애로움
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-2">
                                    <td className="py-3 px-4 text-sm font-medium text-gray-6">
                                        주요 동기
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        진실 규명
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        정의 실현
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-5">
                                        후배 양성
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>캐릭터 관계도</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center py-12 text-gray-5">
                        <div className="text-center">
                            <Icon
                                name="account_tree"
                                size={48}
                                className="mx-auto mb-4 opacity-50"
                            />
                            <p className="text-sm">
                                캐릭터 간 관계를 시각적으로 표현합니다
                            </p>
                            <p className="text-xs text-gray-4 mt-1">
                                (관계도 시각화 기능 예정)
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            </div>

            {/* 우측 ListPanel */}
            <div className="w-[300px] shrink-0 hidden min-[1500px]:block overflow-y-auto custom-scrollbar">
                <ListPanel
                    items={rightPanelItems}
                    onItemsChange={setRightPanelItems}
                    title="비교 항목"
                    description="드래그하여 순서 변경"
                />
            </div>
        </div>
    );
}

// 공통 설정 관리 탭 콘텐츠
function CommonSettingsContent() {
    const [leftPanelItems, setLeftPanelItems] = useState([
        { id: "1", content: "성격 유형" },
        { id: "2", content: "능력치" },
        { id: "3", content: "관계 유형" },
    ]);

    const [rightPanelItems, setRightPanelItems] = useState([
        { id: "1", content: "템플릿 1" },
        { id: "2", content: "템플릿 2" },
        { id: "3", content: "템플릿 3" },
    ]);

    return (
        <div className="flex gap-6 h-[calc(100vh-200px)]">
            {/* 좌측 ListPanel */}
            <div className="w-[300px] shrink-0 hidden min-[1500px]:block overflow-y-auto custom-scrollbar">
                <ListPanel
                    items={leftPanelItems}
                    onItemsChange={setLeftPanelItems}
                    title="설정 항목"
                    description="드래그하여 순서 변경"
                />
            </div>

            {/* 중앙 콘텐츠 */}
            <div className="w-[630px] shrink-0 space-y-6 min-[1500px]:mx-0 mx-auto overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-6">
                        공통 설정 템플릿
                    </h3>
                    <p className="text-sm text-gray-5 mt-1">
                        모든 캐릭터에 공통으로 적용할 속성을 관리합니다
                    </p>
                </div>
                <Button variant="point1" className="gap-2">
                    <Icon name="add" size={20} />
                    새 설정 추가
                </Button>
            </div>

            <div className="space-y-4">
                {mockCommonSettings.map((setting) => (
                    <Card key={setting.id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-base">
                                    {setting.category}
                                </CardTitle>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="gap-1"
                                    >
                                        <Icon name="edit" size={16} />
                                        편집
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {setting.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="inline-flex items-center gap-2 bg-gray-1 text-gray-6 px-3 py-2 rounded-lg text-sm"
                                    >
                                        <span>{item}</span>
                                        <button
                                            type="button"
                                            className="text-gray-5 hover:text-gray-6"
                                        >
                                            <Icon name="close" size={14} />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1 bg-point-2/10 text-point-2 px-3 py-2 rounded-lg text-sm hover:bg-point-2/20"
                                >
                                    <Icon name="add" size={16} />
                                    <span>항목 추가</span>
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>템플릿 미리보기</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-5">
                            설정된 템플릿이 새 캐릭터 생성 시 어떻게
                            표시되는지 미리 확인할 수 있습니다.
                        </p>
                        <div className="border border-gray-2 rounded-lg p-4 bg-gray-1/50">
                            <h4 className="text-sm font-semibold text-gray-6 mb-3">
                                새 캐릭터 프로필
                            </h4>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <label className="text-gray-6 font-medium">
                                        성격 유형
                                    </label>
                                    <p className="text-gray-5 mt-1">
                                        MBTI, 에니어그램, 혈액형
                                    </p>
                                </div>
                                <div>
                                    <label className="text-gray-6 font-medium">
                                        능력치
                                    </label>
                                    <p className="text-gray-5 mt-1">
                                        체력, 지능, 매력, 운
                                    </p>
                                </div>
                                <div>
                                    <label className="text-gray-6 font-medium">
                                        관계 유형
                                    </label>
                                    <p className="text-gray-5 mt-1">
                                        친구, 적, 연인, 가족, 동료, 라이벌
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            </div>

            {/* 우측 ListPanel */}
            <div className="w-[300px] shrink-0 hidden min-[1500px]:block overflow-y-auto custom-scrollbar">
                <ListPanel
                    items={rightPanelItems}
                    onItemsChange={setRightPanelItems}
                    title="템플릿"
                    description="드래그하여 순서 변경"
                />
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
            title="캐릭터 설정"
            description="작품 속 캐릭터들을 체계적으로 관리하고 분석하세요"
            showTabs={true}
            tabs={tabs}
            defaultTab="settings"
        />
    );
}
