"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CommonLnb } from "@/components/layout/CommonLnb";
import { BackPanel } from "@/components/layout/BackPanel";

export function CommonLayout({
    children,
    className,
    title,
    description,
    showTabs = false,
    tabs = [],
    defaultTab,
}) {
    return (
        <div
            className={cn(
                "relative flex h-dvh max-h-dvh flex-col overflow-hidden text-foreground",
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
            />

            {/* 본문: 사이드바 + 메인 — 헤더와 겹치도록 위로 당김 */}
            <div className="relative z-10 flex min-h-0 flex-col flex-1 -mt-6 md:-mt-0">
                <CommonLnb />
                {/* 타이틀 영역 */}
                <div className="w-full py-6 md:pb-15 md:pt-[90px]">
                    <h2 className="fz-24 text-center leading-[1] text-gray-6 font-bold">
                        {title || "페이지 타이틀"}
                    </h2>
                    <p
                        className={cn(
                            "fz-16 text-center md:w-[60%] md:max-w-full pt-2 md:pt-3 overflow-hidden max-w-[330px] md:leading-[1] mt-[11px] [&_strong]:font-bold m-auto",
                        )}
                    >
                        {description ||
                            "페이지에 대한 간단한 설명을 입력하세요. 이 영역은 선택적으로 사용할 수 있습니다."}
                    </p>
                </div>
                <main className="flex min-h-0 flex-1 flex-col pb-24 md:px-[90px] lg:pb-15 pb-[188px] w-full max-w-[1540px] mx-auto ">
                    {showTabs && tabs.length > 0 ? (
                        <Tabs
                            variant="slash"
                            defaultValue={defaultTab || tabs[0]?.value}
                            className="flex min-h-0 flex-1 flex-col relative"
                        >
                            <div className="mb-4 absolute z-3 md:-top-[20px] top-[20px] left-0 right-0 px-5 md:px-10">
                                <TabsList>
                                    {tabs.map((tab) => (
                                        <TabsTrigger
                                            key={tab.value}
                                            value={tab.value}
                                            className="flex-1 md:flex-initial"
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
                                            "flex min-h-0 flex-1 flex-col overflow-hidden md:mt-0 mt-10 rounded-[40px] bg-white",
                                        )}
                                    >
                                        <div className="md:px-4 px-[30px] m-auto py-[58px] min-h-0 flex-1">
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
                        >
                            <div className="md:px-4 px-[30px] max-w-[630px] m-auto py-[58px] min-h-0 flex-1 overflow-y-auto custom-scrollbar">
                                {children}
                            </div>
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
}
