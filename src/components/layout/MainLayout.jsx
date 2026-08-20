"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BackPanel } from "@/components/layout/BackPanel";

export function MainLayout({
    children,
    className,
    title,
    description,
    titleEng,
    descriptionEng,
    showTabs = false,
    tabs = [],
    defaultTab,
}) {
    const [isMobile, setIsMobile] = useState(false);
    const [isFooterExpanded, setIsFooterExpanded] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleFooterExpandChange = (expanded) => {
        setIsFooterExpanded(expanded);
    };

    return (
        <>
            <div
                className={cn(
                    "relative flex h-dvh max-h-dvh flex-col overflow-hidden text-gray-6",
                    className,
                )}
            >
                {/* 배경 판낼 */}
                <BackPanel topColor="bg-point-1" bottomColor="bg-gray-1" />

                <Header
                    bgColor="bg-point-1"
                    textColor="text-white"
                    borderColor="border-white/70"
                    hoverBg="hover:bg-white/10"
                    logoColor="text-white"
                    logoName="logo"
                    chipsVariant="orange"
                    titleTextColor="text-sub-8"
                    showWorkTitle={false}
                />

                {/* 본문: 사이드바 + 메인 — 헤더와 겹치도록 위로 당김 */}
                <div className="relative z-10 flex min-h-0 flex-col flex-1 -mt-6 md:-mt-0">
                    {/* 타이틀 영역 */}
                    <div className="w-full py-6 md:pb-15 md:pt-[90px]">
                        <h2
                            className="text-[20px] text-center leading-[1] text-white font-semibold px-5"
                            data-eng={titleEng}
                        >
                            {title || "페이지 타이틀"}
                        </h2>
                        <p
                            className={cn(
                                "fz-16 text-center w-[calc(100%-20px)] md:max-w-full overflow-hidden md:leading-[1] [&_strong]:font-semibold m-auto pt-2 md:pt-3 md:mt-[11px] text-white",
                                !description && "md:block hidden",
                            )}
                            data-eng={descriptionEng}
                        >
                            {description ||
                                "페이지에 대한 간단한 설명을 입력하세요. 이 영역은 선택적으로 사용할 수 있습니다."}
                        </p>
                    </div>
                    <main
                        className={cn(
                            "flex min-h-0 flex-1 flex-col md:px-[90px] w-full max-w-[1540px] mx-auto",
                            isFooterExpanded
                                ? "lg:pb-[168px] pb-[390px] footer-expand"
                                : "lg:pb-20 pb-[200px]",
                        )}
                    >
                        {showTabs && tabs.length > 0 ? (
                            <Tabs
                                variant="slash"
                                defaultValue={defaultTab || tabs[0]?.value}
                                className="min-h-0 flex-1 flex-col relative flex"
                            >
                                <div className="mb-4 absolute z-3 -top-[20px] left-0 right-0 pl-5 pr-5 md:pl-10 md:pr-10">
                                    <TabsList>
                                        {tabs.map((tab) => (
                                            <TabsTrigger
                                                key={tab.value}
                                                value={tab.value}
                                                className="flex-1 md:flex-initial md:!min-w-[140px]"
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
                                                "flex min-h-0 flex-1 flex-col rounded-[40px] bg-white",
                                            )}
                                            style={{
                                                boxShadow: isMobile
                                                    ? "0px -8px 16px 0px #00000033"
                                                    : "none",
                                            }}
                                        >
                                            <div className="md:px-4 px-[30px] max-w-[678px] w-full m-auto py-[58px] md:pt-[30px] pt-[6px] min-h-0 flex-1 overflow-y-auto custom-scrollbar">
                                                {tab.content}
                                            </div>
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
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
                                <div className="md:px-4 px-[30px] max-w-[678px] w-full m-auto py-[58px] md:pt-[30px] pt-[6px] min-h-0 flex-1 overflow-y-auto custom-scrollbar">
                                    {children}
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer onExpandChange={handleFooterExpandChange} />
        </>
    );
}
