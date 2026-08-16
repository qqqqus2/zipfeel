"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CommonLnb } from "@/components/layout/CommonLnb";
import { BackPanel } from "@/components/layout/BackPanel";
import { Icon } from "@/components/ui/icon";

export function CommonLayout({
    children,
    className,
    title,
    description,
    titleEng,
    descriptionEng,
    showTabs = false,
    tabs = [],
    defaultTab,
    showFooter = true,
    showDetailHeader = false,
    onBack,
    onPreview,
    onDelete,
    onSave,
    reverseTitleOrder = false,
    removeTitleSpacing = false,
    mobileTitle,
    mobileDescription,
    mobileTitleEng,
    mobileDescriptionEng,
    showMobileEditButton = false,
    onEdit,
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            <div
                className={cn(
                    "relative flex h-dvh max-h-dvh flex-col overflow-hidden text-gray-6",
                    className,
                )}
            >
                {/* 배경 판낼 */}
                <BackPanel topColor="bg-sub-7" bottomColor="bg-gray-1" />

                <Header
                    bgColor="bg-sub-7"
                    textColor="text-point-1"
                    borderColor="border-point-1/70"
                    hoverBg="hover:bg-point-1/10"
                    logoColor="text-black"
                    logoName="logo-black"
                    chipsVariant="point"
                    titleTextColor="text-gray-6"
                    showDetailHeader={showDetailHeader}
                    onBack={onBack}
                    onPreview={onPreview}
                    onDelete={onDelete}
                    onSave={onSave}
                />

                {/* 본문: 사이드바 + 메인 — 헤더와 겹치도록 위로 당김 */}
                <div className="relative z-10 flex min-h-0 flex-col flex-1 -mt-6 md:-mt-0">
                    <CommonLnb />
                    {/* 타이틀 영역 */}
                    <div className="w-full py-6 md:pb-15 md:pt-[90px] ">
                        {reverseTitleOrder ? (
                            <>
                                {/* PC용 - 일반 순서 */}
                                <div className="hidden md:block">
                                    <h2
                                        className="text-[24px] text-center leading-[1]  text-gray-6 font-bold px-5"
                                        data-eng={titleEng}
                                    >
                                        {title || "페이지 타이틀"}
                                    </h2>
                                    <p
                                        className={cn(
                                            "fz-16 text-center w-[calc(100%-20px)] md:max-w-full pt-2 md:pt-3 overflow-hidden md:leading-[1] text-[#474554] [&_strong]:font-bold m-auto",
                                        )}
                                        data-eng={descriptionEng}
                                    >
                                        {description ||
                                            "페이지에 대한 간단한 설명을 입력하세요. 이 영역은 선택적으로 사용할 수 있습니다."}
                                    </p>
                                </div>
                                {/* 모바일용 - 역순 */}
                                <div className="md:hidden">
                                    <p
                                        className={cn(
                                            "text-[14px] text-center w-[calc(100%-20px)] md:max-w-full overflow-hidden md:leading-[1] [&_strong]:font-bold m-auto",
                                        )}
                                        data-eng={
                                            mobileDescriptionEng ||
                                            descriptionEng
                                        }
                                    >
                                        {mobileDescription ||
                                            description ||
                                            "페이지에 대한 간단한 설명을 입력하세요. 이 영역은 선택적으로 사용할 수 있습니다."}
                                    </p>
                                    <h2
                                        className={cn(
                                            "text-[20px] text-center leading-[1] text-gray-6 font-bold line-clamp-2 px-5",
                                            removeTitleSpacing
                                                ? ""
                                                : "mt-[5px]",
                                        )}
                                        data-eng={mobileTitleEng || titleEng}
                                    >
                                        {mobileTitle ||
                                            title ||
                                            "페이지 타이틀"}
                                    </h2>
                                    {showMobileEditButton && (
                                        <div className="flex justify-center mt-[5px]">
                                            <button
                                                className="text-[14px] font-bold cursor-pointer flex items-center gap-2"
                                                onClick={onEdit}
                                            >
                                                <Icon
                                                    name="diamond"
                                                    size={20}
                                                />
                                                수정
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <h2
                                    className="text-[20px] text-center leading-[1] text-gray-6 font-bold px-5"
                                    data-eng={titleEng}
                                >
                                    {title || "페이지 타이틀"}
                                </h2>
                                <p
                                    className={cn(
                                        "fz-16 text-center w-[calc(100%-20px)] md:max-w-full overflow-hidden md:leading-[1] [&_strong]:font-bold m-auto",
                                        removeTitleSpacing
                                            ? ""
                                            : "pt-2 md:pt-3 md:mt-[11px]",
                                    )}
                                    data-eng={descriptionEng}
                                >
                                    {description ||
                                        "페이지에 대한 간단한 설명을 입력하세요. 이 영역은 선택적으로 사용할 수 있습니다."}
                                </p>
                            </>
                        )}
                    </div>
                    <main
                        className={cn(
                            "flex min-h-0 flex-1 flex-col md:px-[90px] lg:pb-15 w-full max-w-[1540px] mx-auto",
                            showFooter ? "pb-24 pb-[188px]" : "pb-0",
                        )}
                    >
                        {showTabs && tabs.length > 0 ? (
                            <>
                                {/* 데스크톱: 탭 UI */}
                                <Tabs
                                    variant="slash"
                                    defaultValue={defaultTab || tabs[0]?.value}
                                    className="hidden md:flex min-h-0 flex-1 flex-col relative"
                                >
                                    <div className="mb-4 absolute z-3 -top-[20px] left-0 right-0 px-5 md:px-10">
                                        <TabsList>
                                            {tabs.map((tab) => (
                                                <TabsTrigger
                                                    key={tab.value}
                                                    value={tab.value}
                                                    className="flex-1 md:flex-initial"
                                                    data-eng={tab.labelEng}
                                                >
                                                    {tab.label}
                                                </TabsTrigger>
                                            ))}
                                        </TabsList>
                                    </div>
                                    {tabs.map((tab) => (
                                        <TabsContent
                                            key={tab.value}
                                            value={tab.value}
                                            className="flex min-h-0 flex-1 flex-col mt-0"
                                        >
                                            <div
                                                className={cn(
                                                    "flex min-h-0 flex-1 flex-col overflow-hidden rounded-[40px] bg-white",
                                                )}
                                            >
                                                <div className="px-4 m-auto py-[58px] md:pt-[30px] min-h-0 flex-1 w-full">
                                                    {tab.content}
                                                </div>
                                            </div>
                                        </TabsContent>
                                    ))}
                                </Tabs>

                                {/* 모바일: 첫 번째 탭 콘텐츠만 표시 */}
                                <div
                                    className="md:hidden flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[40px] bg-white"
                                    style={{
                                        boxShadow:
                                            "0px -8px 16px 0px #00000033",
                                    }}
                                >
                                    <div className="px-[30px] m-auto py-[58px] md:pt-[30px] pt-[6px]  min-h-0 flex-1 w-full">
                                        {tabs[0]?.content}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div
                                className={cn(
                                    "flex min-h-0 flex-1 flex-col overflow-hidden rounded-[40px] bg-white",
                                )}
                                style={{
                                    boxShadow: isMobile
                                        ? "0px -8px 16px 0px #00000033"
                                        : "none",
                                }}
                            >
                                <div className="md:px-4 px-[30px] max-w-[678px] m-auto py-[58px] md:pt-[30px] pt-[6px] min-h-0 flex-1 overflow-y-auto custom-scrollbar">
                                    {children}
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            {showFooter && <Footer />}
        </>
    );
}
