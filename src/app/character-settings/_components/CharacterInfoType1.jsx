"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Icon } from "@/components/ui/icon";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { HexagonChart } from "@/components/ui/hexagon-chart";

// React Quill을 동적으로 임포트 (SSR 방지)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// 히스토리 아코디언 데이터
const historyData = [
    {
        id: "item-1",
        title: "Ep. 0,0000 · Char(Status)",
        content:
            "아코디언 내용 1입니다. 아코디언 내용 1입니다. 아코디언 내용 1입니다.아코디언 내용 1입니다.아코디언 내용 1입니다.아코디언 내용 1입니다.",
    },
    {
        id: "item-2",
        title: "Ep. 0,0000 · Char(Status)",
        content: "아코디언 내용 2입니다.",
    },
    {
        id: "item-3",
        title: "Ep. 0,0000 · Char(Status)",
        content: "아코디언 내용 3입니다.",
    },
    {
        id: "item-4",
        title: "Ep. 0,0000 · Char(Status)",
        content: "아코디언 내용 4입니다.",
    },
    {
        id: "item-5",
        title: "Ep. 0,0000 · Char(Status)",
        content: "아코디언 내용 5입니다.",
    },
    {
        id: "item-6",
        title: "Ep. 0,0000 · Char(Status)",
        content: "아코디언 내용 6입니다.",
    },
];

// 첫 번째 육각형 차트 데이터 - 기본 6개 항목
const hexagonData1 = [
    { label: "외모", value: 100, delta: 5 },
    { label: "성격", value: 65, delta: -3 },
    { label: "학력", value: 92, delta: 10 },
    { label: "직업", value: 92, delta: 0 },
    { label: "자산", value: 85, delta: -7 },
    { label: "집안", value: 79, delta: 2 },
];

// 두 번째 육각형 차트 데이터 - 랜덤 6개 항목
const hexagonData2 = [
    {
        label: "체력",
        value: Math.floor(Math.random() * 100),
        delta: Math.floor(Math.random() * 21) - 10,
    },
    {
        label: "지능",
        value: Math.floor(Math.random() * 100),
        delta: Math.floor(Math.random() * 21) - 10,
    },
    {
        label: "매력",
        value: Math.floor(Math.random() * 100),
        delta: Math.floor(Math.random() * 21) - 10,
    },
    {
        label: "운",
        value: Math.floor(Math.random() * 100),
        delta: Math.floor(Math.random() * 21) - 10,
    },
    {
        label: "리더십리더십리더십",
        value: Math.floor(Math.random() * 100),
        delta: Math.floor(Math.random() * 21) - 10,
    },
    {
        label: "창의력",
        value: Math.floor(Math.random() * 100),
        delta: Math.floor(Math.random() * 21) - 10,
    },
];

/**
 * CharacterInfoType1 - 캐릭터 정보 컴포넌트 (좌측 영역용)
 */
export const CharacterInfoType1 = () => {
    const [currentTab, setCurrentTab] = useState("history");
    const [isHexaCorrectionEnabled, setIsHexaCorrectionEnabled] =
        useState(false);
    const [editorContent, setEditorContent] = useState("");

    return (
        <div className="w-full h-full overflow-hidden flex-1 flex flex-col mt-[15px]">
            {/* 헤더 영역 */}
            <div className="bg-gray-6 relative rounded-t-2xl pt-[78px] pb-[52px] px-5 pt-5">
                <button
                    type="button"
                    aria-label="close"
                    className="absolute top-[30px] right-[15px] cursor-pointer"
                >
                    <Icon name="close" size={30} className="text-white " />
                </button>
                <div className="text-white">
                    <div className="flex justify-between w-full pb-[5px] leading-[26px]">
                        <span className="fz-12 font-normal leading-5">
                            엑스트라
                        </span>
                        <span className="fz-12 font-normal flex items-center leading-5 gap-1">
                            <Icon
                                name="dark_mode"
                                size={16}
                                className="text-white"
                            />
                            혼수상태
                        </span>
                    </div>
                    <strong className="fz-20 font-semibold line-clamp-2 leading-[1.2]">
                        일일일일일일일일일일이이이이이이이
                        일일일일일일일일일일이이이이이이이
                    </strong>
                    <div className="flex items-center w-full mt-2">
                        <div className="fz-14 flex gap-[3px] flex-1 justify-start">
                            <strong className="font-semibold">애칭</strong>
                            <span className="font-normal">일이삼사</span>
                        </div>
                        <span className="fz-14 px-2">·</span>
                        <div className="fz-14 flex gap-[3px] flex-1">
                            <strong className="font-semibold">호칭</strong>
                            <span className="font-normal">일이삼사오육</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 탭 영역 - 헤더 바로 아래 위치 */}
            <div className="relative w-[calc(100%-15px)] left-[15px]">
                <Tabs
                    value={currentTab}
                    onValueChange={setCurrentTab}
                    variant="solidRounded"
                    accentColor="#BE94FF"
                    className="w-full absolute -top-[26px]"
                >
                    <TabsList className="w-full justify-start gap-3">
                        <TabsTrigger
                            value="history"
                            className="px-5 min-w-[80px] shrink-0"
                        >
                            히스토리
                        </TabsTrigger>
                        <TabsTrigger
                            value="basic"
                            className="px-5 min-w-[80px] shrink-0"
                        >
                            기본
                        </TabsTrigger>
                        <TabsTrigger
                            value="appearance"
                            className="px-5 min-w-[80px] shrink-0"
                        >
                            외형
                        </TabsTrigger>
                        <TabsTrigger
                            value="personality"
                            className="px-5 min-w-[80px] shrink-0"
                        >
                            성격
                        </TabsTrigger>
                        <TabsTrigger
                            value="etc"
                            className="px-5 min-w-[80px] shrink-0"
                        >
                            기타1
                        </TabsTrigger>
                        <TabsTrigger
                            value="etc1"
                            className="px-5 min-w-[80px] shrink-0"
                        >
                            기타2
                        </TabsTrigger>
                        <TabsTrigger
                            value="etc2"
                            className="px-5 min-w-[80px] shrink-0"
                        >
                            기타3
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* 바디 영역 */}
            <div className="flex-1 w-full overflow-y-auto custom-scrollbar overflow-x-hidden">
                <Tabs
                    value={currentTab}
                    onValueChange={setCurrentTab}
                    className="w-full pt-[22px]"
                >
                    <TabsContent value="history">
                        <Accordion type="single" collapsible>
                            {historyData.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className={index === 0 ? "border-t-0" : ""}
                                >
                                    <AccordionTrigger className="cursor-pointer">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="fz-14 text-[#474554] pb-[15px] px-[15px]">
                                            {item.content}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>

                    <TabsContent value="basic" className="-mx-5">
                        <section className="flex flex-col gap-4 p-[30px]">
                            <h3 className="font-semibold text-gray-6 flex items-center gap-1">
                                <Icon name="ico-title" size={16} />
                                Section명
                            </h3>
                            <div>
                                <p className="fz-14 text-[#474554] text-center py-[28px]">
                                    설정하지 않은 섹션입니다.
                                </p>
                            </div>
                        </section>
                        <section className="flex flex-col gap-4 bg-gray-2 p-[30px]">
                            <h3 className="font-semibold text-gray-6 flex items-center gap-1">
                                <Icon name="ico-title" size={16} />
                                Section명
                            </h3>
                            <div className="character-basic-info flex flex-col gap-[30px]">
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px]">
                                        캐릭터 이름
                                    </dt>
                                    <dd>라디오까지는 Input Stroke Hide</dd>
                                </dl>
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px]">
                                        항목명
                                    </dt>
                                    <dd>
                                        <div className="flex items-center gap-[10px]">
                                            <strong>세부 항목</strong>
                                            <span>
                                                세부항목은 항목명 없을 수도...
                                            </span>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px] flex justify-between">
                                        항목명
                                        <span className="fz-14 font-normal">
                                            0 / 10
                                        </span>
                                    </dt>
                                    <dd className="flex flex-col gap-[6px] p-[10px]">
                                        <div className="flex justify-between items-center gap-[10px]">
                                            입력된 내용이 보여집니다
                                            <strong>항목명</strong>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px]">
                                        항목명
                                    </dt>
                                    <dd>
                                        <ul className="list-disc-small">
                                            <li className="fz-16 font-normal">
                                                선택 항목 1
                                            </li>
                                            <li className="fz-16 font-normal">
                                                선택 항목 2
                                            </li>
                                            <li className="fz-16 font-normal">
                                                선택 항목 3
                                            </li>
                                            <li className="fz-16 font-normal">
                                                선택 항목 4
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px]">
                                        항목명
                                    </dt>
                                    <dd className="flex flex-col gap-[6px]">
                                        <div className="flex justify-between items-center gap-[10px] fz-16 font-normal">
                                            <strong>항목명</strong>
                                            입력된 내용이 보여집니다
                                        </div>
                                        <div className="flex justify-between items-center gap-[10px] fz-16 font-normal">
                                            <strong>항목명</strong>
                                            입력된 내용이 보여집니다
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px]">
                                        항목명
                                    </dt>
                                    <dd>
                                        <ul className="list-disc-small">
                                            <li className="fz-16 font-normal">
                                                선택 항목 1
                                            </li>
                                            <li className="fz-16 font-normal">
                                                선택 항목 2
                                            </li>
                                            <li className="fz-16 font-normal">
                                                선택 항목 3
                                            </li>
                                            <li className="fz-16 font-normal">
                                                선택 항목 4
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px]">
                                        항목명
                                    </dt>
                                    <dd>
                                        <div className="quill-editor-wrapper -mx-5">
                                            <ReactQuill
                                                theme="snow"
                                                value={editorContent}
                                                onChange={setEditorContent}
                                                modules={{
                                                    toolbar: [
                                                        [
                                                            {
                                                                header: [
                                                                    1,
                                                                    2,
                                                                    3,
                                                                    false,
                                                                ],
                                                            },
                                                        ],
                                                        [
                                                            "bold",
                                                            "italic",
                                                            "underline",
                                                        ],
                                                        [
                                                            {
                                                                list: "ordered",
                                                            },
                                                            {
                                                                list: "bullet",
                                                            },
                                                        ],
                                                        ["link"],
                                                        ["clean"],
                                                    ],
                                                }}
                                                placeholder="내용을 입력하세요..."
                                            />
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="fz-14 font-semibold mb-[6px]">
                                        항목명
                                    </dt>
                                    <dd>
                                        <div className="fz-16 font-normal text-gray-6 p-2">
                                            Text Area Case는 View에서는 Min 없이
                                            그냥 Hug
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </section>

                        <section className="flex flex-col gap-5 p-[30px]">
                            <div className="flex justify-between">
                                <h3 className="font-semibold text-gray-6 flex items-center gap-1">
                                    <Icon
                                        name={
                                            isHexaCorrectionEnabled
                                                ? "ico-title-on"
                                                : "ico-title"
                                        }
                                        size={16}
                                    />
                                    육각형 셋팅
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <label
                                        htmlFor="hexaCorrection"
                                        className="fz-12 text-point-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        보정 적용
                                    </label>
                                    <Checkbox
                                        id="hexaCorrection"
                                        checked={isHexaCorrectionEnabled}
                                        onCheckedChange={
                                            setIsHexaCorrectionEnabled
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <HexagonChart
                                    title="기본 정보"
                                    data={hexagonData1}
                                    showDelta={isHexaCorrectionEnabled}
                                />
                                <HexagonChart
                                    title="능력치"
                                    data={hexagonData2}
                                    showDelta={isHexaCorrectionEnabled}
                                />
                            </div>
                        </section>
                    </TabsContent>

                    <TabsContent value="appearance">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-gray-6">외형</h3>
                            <p className="text-sm text-gray-5">
                                이것은 외형 탭입니다.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};
