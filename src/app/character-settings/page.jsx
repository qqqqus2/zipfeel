"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { SectionTitleToggle } from "@/components/ui/section-title-toggle";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { characterData, findCharacterById } from "@/data/characterData";
import { cn } from "@/lib/utils";
import { CharacterInfoType1 } from "./_components/CharacterInfoType1";
import { CharacterInfoType2 } from "./_components/CharacterInfoType2";
import { CharacterInfoType3 } from "./_components/CharacterInfoType3";

// 캐릭터 목록 더미 데이터 (좌측 LNB용)
const characterListData = characterData;

// 더미 데이터 (20개의 에피소드)
const episodesData = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    episode: i + 1,
    character: `캐릭터 ${i + 1}`,
    status: i % 3 === 0 ? "진행중" : i % 3 === 1 ? "완료" : "대기",
    content: `에피소드 ${i + 1}의 상세 내용입니다. 이 부분에는 캐릭터의 등장 장면, 대사, 행동 등이 포함됩니다.`,
}));

function ColumnSettingCard({
    variant,
    description,
    className,
    columnName = "컬럼명",
    required = false,
    tooltip,
    preview = false,
    descriptionFull = false,
    disabled = false,
}) {
    return (
        <Card
            variant={variant}
            className={cn(
                "w-full p-[17px]",
                disabled && "opacity-50 pointer-events-none",
                className,
            )}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1">
                    <div className={cn("flex items-center gap-1")}>
                        <CardTitle
                            className={cn(
                                "text-sm font-semibold",

                                required && "text-point-1",
                            )}
                        >
                            <span>
                                {columnName}
                                {required && (
                                    <span className="text-point-2 ml-1">*</span>
                                )}
                            </span>
                        </CardTitle>
                        {tooltip && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            type="button"
                                            className={cn(
                                                "inline-flex fz-14 text-gray-6 cursor-pointer font-semibold items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
                                            )}
                                            aria-label="도움말"
                                        >
                                            ⓘ
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                        {preview && (
                            <Icon
                                name="eyeglasses"
                                className="ml-auto opacity-50 text-point-1"
                                size={20}
                            />
                        )}
                    </div>
                    <CardDescription
                        className={cn(
                            "fz-16 font-light text-gray-6 leading-snug",
                            !descriptionFull && "line-clamp-1",
                        )}
                    >
                        {description}
                    </CardDescription>
                </div>
                <div className="shrink-0 pt-0.5">
                    {variant === "hover" ? (
                        <span
                            className="inline-flex size-9 items-center justify-center rounded-full bg-point-2 text-white shadow-sm"
                            aria-hidden
                        ></span>
                    ) : null}
                    {variant === "active" ? (
                        <span
                            className="inline-flex size-9 items-center justify-center rounded-full bg-black/25 text-white shadow-inner"
                            aria-hidden
                        ></span>
                    ) : null}
                </div>
            </div>
        </Card>
    );
}

// 좌측 필터 데이터 (작품정보)
const leftFilterOptions = [
    { id: "work1", label: "작품1" },
    { id: "work2", label: "작품2" },
    { id: "work3", label: "작품3" },
    { id: "work4", label: "작품4" },
];

// 우측 필터 데이터
const filterOptions = [
    { id: "all", label: "전체", count: 1234 },
    { id: "status1", label: "상태", count: 456 },
    { id: "status2", label: "전직", count: 678 },
    { id: "status3", label: "랩업", count: 0 },
];

// 캐릭터 설정 탭 콘텐츠
function CharacterSettingsContent() {
    const searchParams = useSearchParams();
    const characterId = searchParams.get("id");
    const character = characterId
        ? findCharacterById(characterId)
        : characterListData[0];

    // 캐릭터가 없으면 첫 번째 캐릭터 사용
    const currentCharacter = character || characterListData[0];

    // 우측 필터 선택 상태 관리
    const [selectedFilter, setSelectedFilter] = React.useState("all");
    // 좌측 필터 패널 열림/닫힘 상태 관리
    const [isLeftFilterOpen, setIsLeftFilterOpen] = React.useState(false);
    // 우측 필터 패널 열림/닫힘 상태 관리
    const [isRightFilterOpen, setIsRightFilterOpen] = React.useState(false);
    // 좌측 필터 선택 상태 관리
    const [selectedLeftFilter, setSelectedLeftFilter] = React.useState("work1");
    // 아코디언 열림 상태 관리
    const [openAccordion, setOpenAccordion] = React.useState(
        `episode-${episodesData[0].id}`,
    );

    return (
        <div className="flex gap-6 w-full max-w-none h-full md:pt-[30px]">
            {/* 좌측 영역 */}
            <div className="w-[300px] shrink-0 hidden 2xl:flex flex-col h-full">
                <span
                    className="relative left-[10px] text-black fz-12 font-semibold"
                    data-eng="References"
                >
                    참고
                </span>
                <div className="relative shrink-0">
                    <div
                        className="border-b-[2px] border-point-2 px-[10px] py-[14px] flex items-center justify-between cursor-pointer"
                        onClick={() => setIsLeftFilterOpen(!isLeftFilterOpen)}
                    >
                        <span className="fz-14 font-regular text-gray-6">
                            {leftFilterOptions.find(
                                (f) => f.id === selectedLeftFilter,
                            )?.label || "작품정보"}
                        </span>
                        <Icon
                            name="keyboard_arrow_down"
                            size={12}
                            className="text-point-2"
                        />
                    </div>
                    {/* 좌측 필터 패널 */}
                    {isLeftFilterOpen && (
                        <div className="absolute top-2.5 left-0  right-0 bg-point-1 shadow-lg z-10 ">
                            <button
                                type="button"
                                aria-label="close"
                                className="absolute top-1 right-[10px]"
                                onClick={() => setIsLeftFilterOpen(false)}
                            >
                                <Icon
                                    name="keyboard_arrow_down"
                                    size={12}
                                    className="text-white rotate-180"
                                />
                            </button>
                            <div className="flex flex-col gap-[14px] fz-14 text-white p-[10px] leading-[20px] font-regular pr-[30px]">
                                {/* 필터 내용 */}
                                {leftFilterOptions.map((filter) => {
                                    const isSelected =
                                        selectedLeftFilter === filter.id;
                                    return (
                                        <button
                                            key={filter.id}
                                            type="button"
                                            className={cn(
                                                "cursor-pointer text-left flex items-center gap-2",
                                                isSelected && "text-sub-8",
                                            )}
                                            onClick={() => {
                                                setSelectedLeftFilter(
                                                    filter.id,
                                                );
                                                setIsLeftFilterOpen(false);
                                            }}
                                        >
                                            {filter.label}
                                            {isSelected && (
                                                <Icon
                                                    name="check_small"
                                                    size={20}
                                                    className="text-[#FFCC00]"
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex-1 h-[calc(100%-58px)]">
                    {/* 좌측 컴포넌트 전용 */}
                    {/* type-1 */}
                    {/* <CharacterInfoType1 /> */}

                    {/* type-2 */}
                    {/* <CharacterInfoType2 /> */}

                    {/* type-3 */}
                    <CharacterInfoType3 />
                </div>
            </div>

            {/* 중앙 콘텐츠 */}
            <div className="w-full mx-auto lg:w-[630px] shrink-0 space-y-6 overflow-y-auto custom-scrollbar">
                <div className="justify-between items-center hidden md:flex">
                    <div className="flex gap-2 w-full justify-between items-center">
                        <Button
                            variant="oulinePoint1"
                            size="sm"
                            className="group rounded-full flex items-center gap-1"
                            asChild
                        >
                            <Link href="/character-list">
                                <Icon name="arrow_left_alt" size={20} />
                                <span data-eng="Back to List">목록</span>
                            </Link>
                        </Button>
                        <div className="flex gap-2">
                            <Button
                                variant="oulinePoint1"
                                size="sm"
                                className="group rounded-full "
                            >
                                <Icon name="person_raised_hand" size={20} />
                                <span data-eng="Guide">0000 안내</span>
                            </Button>
                            <Button
                                variant="oulinePoint1"
                                size="sm"
                                className="group rounded-full "
                            >
                                <Icon name="folder_check_2" size={20} />
                                <span data-eng="Save">저장</span>
                            </Button>
                            <Button
                                variant="oulinePoint1"
                                size="sm"
                                className="group rounded-full "
                            >
                                <Icon name="ink_eraser" size={20} />
                                <span data-eng="Delete">삭제</span>
                            </Button>
                            <Button
                                variant="oulinePoint1"
                                size="sm"
                                className="group rounded-full "
                            >
                                <Icon name="eyeglasses" size={20} />
                                <span data-eng="Preview">미리보기</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="relative px-0 md:px-5">
                    <div className="relative">
                        <i
                            className="h-10 bg-[#DFD7D5] absolute -right-5 -left-5 rounded-full z-1 -bottom-[24px] hidden md:flex"
                            aria-hidden="true"
                        ></i>
                        <div className="hidden relative md:flex align-center gap-[6px] fz-12 mb-0 z-2">
                            {currentCharacter.metaLines.map((line, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && (
                                        <i className="w-[6px] text-center">·</i>
                                    )}
                                    <p className="flex gap-[6px]">
                                        <span className="text-point-1 font-semibold">
                                            {line.label}
                                        </span>
                                        {line.text}
                                    </p>
                                </React.Fragment>
                            ))}
                        </div>
                        {/* pc에서만 보임 */}
                        <div className="flex align-center gap-[6px] justify-between fz-12 hidden md:flex relative z-2">
                            <h4 className="font-semibold text-[18px]">
                                {currentCharacter.title}
                            </h4>
                            <button className="fz-16 font-semibold shrink-0 cursor-pointer hidden md:flex">
                                <Icon name="diamond" size={24} />
                                수정
                            </button>
                        </div>
                    </div>

                    <Tabs
                        defaultValue="basic"
                        className="w-full relative z-2 "
                        variant="underline"
                    >
                        <TabsList className="w-full !bg-[#FFFFFF99] !grid grid-cols-7 !gap-0 overflow-x-visible px-0 max-md:!flex max-md:overflow-x-auto max-md:justify-start max-md:px-3">
                            <TabsTrigger
                                value="basic"
                                className="min-w-0 w-auto gap-0 max-md:min-w-[84px] max-md:flex-1 max-md:shrink-0"
                                data-eng="Basic"
                            >
                                기본
                            </TabsTrigger>
                            <TabsTrigger
                                value="appearance"
                                className="min-w-0 w-auto gap-0 max-md:min-w-[84px] max-md:flex-1 max-md:shrink-0"
                                data-eng="Look"
                            >
                                외형
                            </TabsTrigger>
                            <TabsTrigger
                                value="personality"
                                className="min-w-0 w-auto gap-0 max-md:min-w-[84px] max-md:flex-1 max-md:shrink-0"
                                data-eng="Traits"
                            >
                                성격
                            </TabsTrigger>
                            <TabsTrigger
                                value="ability"
                                className="min-w-0 w-auto gap-0 max-md:min-w-[84px] max-md:flex-1 max-md:shrink-0"
                                data-eng="Skills"
                            >
                                능력
                            </TabsTrigger>
                            <TabsTrigger
                                value="outfit"
                                className="min-w-0 w-auto gap-0 max-md:min-w-[84px] max-md:flex-1 max-md:shrink-0"
                                data-eng="Gear"
                            >
                                착장
                            </TabsTrigger>
                            <TabsTrigger
                                value="relationship"
                                className="min-w-0 w-auto gap-0 max-md:min-w-[84px] max-md:flex-1 max-md:shrink-0"
                                data-eng="Relations"
                            >
                                관계
                            </TabsTrigger>
                            <TabsTrigger
                                value="etc"
                                className="min-w-0 w-auto gap-0 max-md:min-w-[84px] max-md:flex-1 max-md:shrink-0"
                                data-eng="Traits"
                            >
                                기타
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="basic">
                            <SectionTitleToggle
                                className="mt-[32px]"
                                requiredLabel="설정 필수"
                                title="기본 정보"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-3"
                                        variant="default"
                                        columnName="구분"
                                        required={true}
                                        description="주인공"
                                    />
                                    <ColumnSettingCard
                                        className="col-span-7"
                                        variant="default"
                                        tooltip="컬럼 설명 툴팁입니다"
                                        description="설정 안함"
                                        preview={true}
                                    />
                                </div>
                                <div className="flex gap-5">
                                    <ColumnSettingCard
                                        variant="default"
                                        columnName="서사"
                                        descriptionFull={true}
                                        description="비 오는 항구 도시에서 자란 그는 늘 떠나는 배들을 보며 살았다. 돌아오지 않은 아버지를 대신해 지도와 별을 읽는 법을 배웠고, 언젠가 길을 잃은 사람들을 집으로 데려오는 항해사가 되겠다고 마음먹었다. 그에게 바다는 두려움이자 약속이었다."
                                    />
                                </div>
                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-5"
                                        variant="default"
                                        tooltip="컬럼 설명 툴팁입니다"
                                        description="설정 안함"
                                        preview={true}
                                    />

                                    <ColumnSettingCard
                                        className="col-span-5"
                                        variant="default"
                                        tooltip="컬럼 설명 툴팁입니다"
                                        description="설정 안함"
                                        preview={true}
                                    />
                                </div>
                            </div>

                            <SectionTitleToggle
                                className="mt-[32px]"
                                requiredLabel="설정"
                                title="부가 정보"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-3"
                                        variant="default"
                                        columnName="상태"
                                        tooltip="상태 설명 툴팁입니다"
                                        description="설정 안함"
                                    />
                                    <ColumnSettingCard
                                        className="col-span-7"
                                        variant="point"
                                        columnName="사망일시"
                                        tooltip="컬럼 설명 툴팁입니다"
                                        description="설정 불가"
                                        disabled={true}
                                    />
                                </div>
                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-3"
                                        variant="default"
                                        columnName="직업"
                                        tooltip="직업 설명 툴팁입니다"
                                        description="설정 안함"
                                    />
                                    <ColumnSettingCard
                                        className="col-span-7"
                                        variant="default"
                                        columnName="생년월일"
                                        description="설정 안함"
                                    />
                                </div>
                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-3"
                                        variant="default"
                                        columnName="등급"
                                        description="설정 안함"
                                    />
                                    <div className="col-span-7 grid grid-cols-10 gap-5">
                                        <ColumnSettingCard
                                            className="col-span-5"
                                            variant="default"
                                            columnName="레벨"
                                            description="설정 안함"
                                        />
                                        <ColumnSettingCard
                                            className="col-span-5"
                                            variant="default"
                                            columnName="경험치"
                                            description="설정 안함"
                                        />
                                    </div>
                                </div>
                            </div>

                            <SectionTitleToggle
                                className="mt-[32px]"
                                requiredLabel="설정"
                                title="소속"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-5"
                                        variant="default"
                                        columnName="출신(출생지)"
                                        description="설정 안함"
                                    />

                                    <ColumnSettingCard
                                        className="col-span-5"
                                        variant="default"
                                        columnName="거주지"
                                        description="설정 안함"
                                    />
                                </div>

                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-5"
                                        variant="default"
                                        columnName="가문"
                                        description="설정 안함"
                                    />

                                    <button
                                        type="button"
                                        className="col-span-5 flex font-regular cursor-pointer flex-col gap-1 text-center bg-point-2 text-white align-center justify-center rounded-lg py-3 hover:bg-point-2/80 transition-colors"
                                    >
                                        <span>00 추가</span>
                                        <span>눌러서 신규 추가</span>
                                    </button>
                                </div>
                            </div>

                            <SectionTitleToggle
                                className="mt-[32px]"
                                requiredLabel="설정"
                                title="모티브"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <div className="grid grid-cols-10 gap-5">
                                    <ColumnSettingCard
                                        className="col-span-5"
                                        variant="default"
                                        columnName="모티브 대상"
                                        description="설정 안함"
                                        preview={true}
                                    />

                                    <ColumnSettingCard
                                        className="col-span-5"
                                        variant="default"
                                        columnName="모티브 이미지"
                                        description="설정 안함"
                                    />
                                </div>
                                <div className="">
                                    <ColumnSettingCard
                                        variant="default"
                                        columnName="모티브 설명"
                                        description="설정 안함"
                                    />
                                </div>
                            </div>

                            <SectionTitleToggle
                                className="mt-[32px]"
                                requiredLabel="설정"
                                title="육각형 셋팅"
                            />
                            <div className="flex flex-col gap-[10px] pb-5">
                                <div className="">
                                    <ColumnSettingCard
                                        variant="point"
                                        columnName="기본"
                                        description="외모(000), 성격(000), 학력(000), 직업(000), 자산(000), 집안(000)"
                                    />
                                </div>
                                <div className="">
                                    <ColumnSettingCard
                                        variant="point"
                                        tooltip="컬럼 설명 툴팁입니다"
                                        columnName="컬럼명"
                                        description="일이삼사오(000), 일이삼사오(000), 일이삼사오(000), 일이삼사오(000), 일이삼사오(000), 일이삼사오(000)"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="appearance">
                            외형 컨텐츠
                        </TabsContent>
                        <TabsContent value="personality">
                            성격 컨텐츠
                        </TabsContent>
                        <TabsContent value="ability">능력 컨텐츠</TabsContent>
                        <TabsContent value="outfit">착장 컨텐츠</TabsContent>
                        <TabsContent value="relationship">
                            관계 컨텐츠
                        </TabsContent>
                        <TabsContent value="etc">기타 컨텐츠</TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* 우측 영역 */}
            <div className="w-[300px] shrink-0 hidden 2xl:flex flex-col h-full">
                {/* 상단에 추가  */}
                <div className="relative shrink-0 flex flex-col">
                    {/* 필터 컴포넌트 추가 */}
                    <span
                        className="relative left-[10px] text-black fz-12 font-semibold"
                        data-eng="Character History"
                    >
                        캐릭터명
                    </span>
                    <div className="relative">
                        <div
                            className="border-b-[2px] border-point-2 px-[10px] py-[14px] flex items-center justify-between cursor-pointer"
                            onClick={() =>
                                setIsRightFilterOpen(!isRightFilterOpen)
                            }
                        >
                            <span className="fz-14 font-regular text-gray-6">
                                {filterOptions.find(
                                    (f) => f.id === selectedFilter,
                                )?.label || "전체"}{" "}
                                (
                                {filterOptions.find(
                                    (f) => f.id === selectedFilter,
                                )?.count || 0}
                                개)
                            </span>
                            <Icon
                                name="filter_alt"
                                size={20}
                                className="text-point-2"
                            />
                        </div>
                        {/* 우측 필터 패널 */}
                        {isRightFilterOpen && (
                            <div className="absolute top-2.5 left-0  right-0 bg-point-1 shadow-lg z-10 ">
                                <button
                                    type="button"
                                    aria-label="close"
                                    className="absolute top-2 right-[10px]"
                                    onClick={() => setIsRightFilterOpen(false)}
                                >
                                    <Icon
                                        name="close"
                                        size={20}
                                        className="text-white "
                                    />
                                </button>
                                <div className="flex flex-col gap-[14px] fz-14 text-white p-[10px] leading-[20px] font-light pr-[30px]">
                                    {/* 필터 내용 */}
                                    {filterOptions.map((filter) => {
                                        const isDisabled = filter.count === 0;
                                        const isSelected =
                                            selectedFilter === filter.id;
                                        return (
                                            <button
                                                key={filter.id}
                                                type="button"
                                                disabled={isDisabled}
                                                className={cn(
                                                    "text-left flex items-center gap-1",
                                                    isDisabled
                                                        ? "cursor-not-allowed text-point-3"
                                                        : "cursor-pointer",
                                                    isSelected &&
                                                        !isDisabled &&
                                                        "text-sub-8",
                                                )}
                                                onClick={() => {
                                                    if (!isDisabled) {
                                                        setSelectedFilter(
                                                            filter.id,
                                                        );
                                                        setIsRightFilterOpen(
                                                            false,
                                                        );
                                                    }
                                                }}
                                            >
                                                {filter.label} ({filter.count})
                                                {isSelected && !isDisabled && (
                                                    <Icon
                                                        name="check_small"
                                                        size={24}
                                                        className="text-[#FFCC00]"
                                                    />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-[15px] mb-2.5 flex justify-between items-center">
                    <span>000 개</span>
                    <Button
                        variant="oulinePoint1"
                        size="sm"
                        className="group rounded-full fz-12 px-2.5"
                    >
                        <Icon
                            name="search_activity"
                            size={20}
                            className="text-point-1 group-hover:text-white group-disabled:text-point-3"
                        />
                        <span data-eng="Add Entry">내역추가</span>
                    </Button>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar rounded-xl">
                    <Accordion
                        type="single"
                        collapsible
                        value={openAccordion}
                        onValueChange={setOpenAccordion}
                        className="w-full"
                    >
                        {episodesData.map((episode) => {
                            const isOpen =
                                openAccordion === `episode-${episode.id}`;
                            return (
                                <AccordionItem
                                    key={episode.id}
                                    value={`episode-${episode.id}`}
                                    className="bg-[#F5F5F5] even:bg-[#F5F5F5]"
                                >
                                    <AccordionTrigger className="group">
                                        <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                                            <span className="text-sm fw-semibold text-gray-6">
                                                {episode.episode
                                                    .toString()
                                                    .padStart(4, "0")}{" "}
                                                화 · {episode.character}(
                                                {episode.status})
                                            </span>
                                            {!isOpen && (
                                                <span className="text-sm text-gray-6 line-clamp-1 w-full text-left">
                                                    {episode.content}
                                                </span>
                                            )}
                                        </div>
                                        <span
                                            className="ml-auto flex gap-2 shrink-0 mr-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span
                                                className="inline-flex items-center justify-center w-6 h-6 cursor-pointer hover:bg-gray-100 rounded transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // 수정 기능
                                                }}
                                            >
                                                <Icon
                                                    name="diamond"
                                                    size={20}
                                                />
                                            </span>
                                            <span
                                                className="inline-flex items-center justify-center w-6 h-6 cursor-pointer hover:bg-gray-100 rounded transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // 삭제 기능
                                                }}
                                            >
                                                <Icon
                                                    name="ink_eraser"
                                                    size={20}
                                                />
                                            </span>
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="px-[15px] text-sm text-gray-6 pb-[15px]">
                                            {episode.content}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
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
    const searchParams = useSearchParams();
    const characterId = searchParams.get("id");
    const character = characterId
        ? findCharacterById(characterId)
        : characterListData[0];
    const currentCharacter = character || characterListData[0];

    // metaLines를 문자열로 변환
    const metaLinesText = currentCharacter.metaLines
        .map((line) => `${line.label}: ${line.text}`)
        .join(" · ");

    const handleEdit = () => {
        alert("수정");
    };

    const tabs = [
        {
            value: "settings",
            label: "캐릭터 설정",
            labelEng: "Character Settings",
            content: <CharacterSettingsContent />,
        },
        {
            value: "comparison",
            label: "캐릭터 비교",
            labelEng: "Comparison",
            content: <CharacterComparisonContent />,
        },
        {
            value: "common",
            label: "공통 설정 관리",
            labelEng: "Common Management",
            content: <CommonSettingsContent />,
        },
    ];

    const handleBack = () => {
        window.history.back();
    };

    const handlePreview = () => {
        alert("미리보기");
    };

    const handleDelete = () => {
        if (confirm("정말 삭제하시겠습니까?")) {
            alert("삭제되었습니다");
        }
    };

    const handleSave = () => {
        alert("저장되었습니다");
    };

    return (
        <CommonLayout
            title="인물 관리"
            description="작중 출연하는 캐릭터를 생성·관리 할 수 있습니다, 각 항목을 눌러 수정할 수 있으며 저장 버튼을 누르면 즉시 반영되니 참고하세요."
            titleEng="Characters"
            descriptionEng="You can create and manage the characters you appear in during the work, you can modify each item by pressing the save button, and it will be reflected immediately."
            mobileTitle={currentCharacter.title}
            mobileDescription={metaLinesText}
            showTabs={true}
            tabs={tabs}
            defaultTab="settings"
            showFooter={true}
            showDetailHeader={true}
            onBack={handleBack}
            onPreview={handlePreview}
            onDelete={handleDelete}
            onSave={handleSave}
            reverseTitleOrder={true}
            removeTitleSpacing={true}
            showMobileEditButton={true}
            onEdit={handleEdit}
        />
    );
}
