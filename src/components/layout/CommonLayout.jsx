"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CommonLnb } from "@/components/layout/CommonLnb";
import { BackPanel } from "@/components/layout/BackPanel";

export function CommonLayout({ children, className, title, description }) {
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
                {(title || description) && (
                    <div className="w-full py-6 md:py-8">
                        {title && (
                            <h2 className="fz-24 text-center leading-[1]">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="fz-16 text-center leading-[1] mt-[11px] [&_strong]:font-bold">
                                {description}
                            </p>
                        )}
                    </div>
                )}
                <main className="flex min-h-0 flex-1 flex-col px-3 pb-24 md:px-[90px] md:pb-20 w-full max-w-[1360px] mx-auto ">
                    <div
                        className={cn(
                            "flex min-h-0 flex-1 flex-col overflow-hidden rounded-[40px] bg-white",
                            // "shadow-[5px_5px_10px_0px_rgb(230_230_230_/_0.8),-5px_-5px_10px_0px_rgb(255_255_255_/_0.2)]",
                        )}
                    >
                        <ScrollArea className="min-h-0 flex-1 overscroll-contain">
                            <div className="p-4 md:p-6">{children}</div>
                        </ScrollArea>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
