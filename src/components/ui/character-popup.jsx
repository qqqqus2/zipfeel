"use client";

import React, { useState } from "react";
import { Icon } from "./icon";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./accordion";
import {
    LayerPopup,
    LayerPopupContent,
    LayerPopupHeader,
    LayerPopupTitle,
    LayerPopupCloseButton,
    LayerPopupBody,
} from "./layer-popup";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { Checkbox } from "./checkbox";
import { HexagonChart } from "./hexagon-chart";

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
 * CharacterPopup - 캐릭터 정보 팝업
 *
 * Props:
 * - open: boolean - 팝업 열림 상태
 * - onOpenChange: (open: boolean) => void - 팝업 상태 변경 콜백
 */
export const CharacterPopup = ({ open, onOpenChange }) => {
    const [currentTab, setCurrentTab] = useState("history");
    const [isHexaCorrectionEnabled, setIsHexaCorrectionEnabled] =
        useState(false);

    return (
        <LayerPopup open={open} onOpenChange={onOpenChange}>
            <LayerPopupContent>
                <LayerPopupHeader variant="dark" className="pb-[52px]">
                    <LayerPopupTitle className="text-white ">
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
                        <strong className="fz-20 font-bold line-clamp-2 leading-[1.2]">
                            일일일일일일일일일일이이이이이이이
                            일일일일일일일일일일이이이이이이이
                        </strong>
                        <div className="flex items-center w-full mt-2">
                            <div className="fz-14 flex gap-[3px] flex-1 justify-start">
                                <strong className="font-bold">애칭</strong>
                                <span className="font-normal">일이삼사</span>
                            </div>
                            <span className="fz-14 px-2">·</span>
                            <div className="fz-14 flex gap-[3px] flex-1">
                                <strong className="font-bold">호칭</strong>
                                <span className="font-normal">
                                    일이삼사오육
                                </span>
                            </div>
                        </div>
                    </LayerPopupTitle>
                    <LayerPopupCloseButton variant="dark" />
                </LayerPopupHeader>

                {/* 탭 영역 - 헤더 바로 아래 위치 */}
                <div className="left-5 relative">
                    <Tabs
                        value={currentTab}
                        onValueChange={setCurrentTab}
                        variant="solidRounded"
                        accentColor="#8557ff"
                        className="w-[calc(100%-30px)] absolute -top-[26px] right-5"
                    >
                        <TabsList className="w-full justify-start gap-3">
                            <TabsTrigger value="history">히스토리</TabsTrigger>
                            <TabsTrigger value="basic">기본</TabsTrigger>
                            <TabsTrigger value="appearance">외형</TabsTrigger>
                            <TabsTrigger value="personality">성격</TabsTrigger>
                            <TabsTrigger value="etc">기타1</TabsTrigger>
                            <TabsTrigger value="etc1">기타2</TabsTrigger>
                            <TabsTrigger value="etc2">기타3</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <LayerPopupBody>
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
                                        className={
                                            index === 0 ? "border-t-0" : ""
                                        }
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

                        <TabsContent value="basic" className="-mx-[24px]">
                            <section className="flex flex-col gap-4  p-[30px]">
                                <h3 className="font-bold text-gray-6 flex items-center gap-1">
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
                                <h3 className="font-bold text-gray-6 flex items-center gap-1">
                                    <Icon name="ico-title" size={16} />
                                    Section명
                                </h3>
                            </section>

                            <section className="flex flex-col gap-5 p-[30px]">
                                <div className="flex justify-between">
                                    <h3 className="font-bold text-gray-6 flex items-center gap-1">
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
                                <h3 className="font-bold text-gray-6">외형</h3>
                                <p className="text-sm text-gray-5">
                                    이것은 외형 탭입니다.
                                </p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </LayerPopupBody>
            </LayerPopupContent>
        </LayerPopup>
    );
};
