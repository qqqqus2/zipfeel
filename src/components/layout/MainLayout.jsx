"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BackPanel } from "@/components/layout/BackPanel";

export function MainLayout({ children, className, title, description }) {
    const [isScrolled, setIsScrolled] = React.useState(false);

    const handleScroll = React.useCallback((event) => {
        const scrollTop = event.target.scrollTop;
        setIsScrolled(scrollTop > 0);
    }, []);

    return (
        <div
            className={cn(
                "relative flex h-dvh max-h-dvh flex-col overflow-hidden text-foreground",
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
            />
            {/* 본문: 사이드바 + 메인 — 헤더와 겹치도록 위로 당김 */}
            <div className="relative z-10 flex min-h-0 flex-1 -mt-6 md:-mt-0 flex-col">
                {/* <CommonLnb /> */}

                {/* 타이틀 영역 */}
                {(title || description) && (
                    <div className="w-full py-6 md:pt-[70px] md:pb-[50px] text-white">
                        {title && (
                            <h1 className="md:text-6 text-[20px] font-bold text-center leading-[1.2]">
                                {title}
                            </h1>
                        )}
                        {description && (
                            <p
                                className={cn(
                                    "text-4 text-center md:max-w-full pt-2 md:pt-3 overflow-hidden max-w-[330px] leading-[1.2] mt-[11px] [&_strong]:font-bold m-auto transition-opacity duration-300",
                                    "md:opacity-100 md:h-auto md:pt-3",
                                    isScrolled
                                        ? "opacity-0 h-0 pt-0"
                                        : "opacity-100",
                                )}
                            >
                                {description}
                            </p>
                        )}
                    </div>
                )}

                <main className="flex min-h-0 flex-1 flex-col md:px-[90px] pb-24 md:px-6 lg:pb-20 pb-[188px] w-full max-w-[1540px] mx-auto">
                    <div
                        className={cn(
                            "flex min-h-0 flex-1 flex-col overflow-hidden rounded-[40px] bg-white [box-shadow:4px_4px_10px_0px_rgba(32,32,32,0.25)] md:[box-shadow:none]",
                        )}
                    >
                        <ScrollArea
                            className="min-h-0 flex-1 overscroll-contain"
                            onScroll={handleScroll}
                        >
                            <div className="md:px-4 px-[30px] pb-[58px]">
                                {children}
                            </div>
                        </ScrollArea>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
