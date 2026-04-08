"use client";

import * as React from "react";
import { Briefcase, Lightbulb, Plane, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@/components/ui/icon";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "../ui/button";

export function MainLayout({ children, className }) {
  return (
    <div
      className={cn(
        "relative flex h-dvh max-h-dvh flex-col overflow-hidden text-foreground",
        className,
      )}
    >
      {/* 배경: 보라 / 흰 반반 */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex flex-col"
        aria-hidden
      >
        <div className="h-1/2 min-h-0 bg-point-1" />
        <div className="h-1/2 min-h-0 bg-gray-1" />
      </div>

      <Header />

      {/* 본문: 사이드바 + 메인 — 헤더와 겹치도록 위로 당김 */}
      <div className="relative z-10 flex min-h-0 flex-1 -mt-6 md:-mt-0">
        <aside
          className="hidden w-14 h-full shrink-0 flex-col bg-transform md:flex md:w-auto md:ml-[30px] md:mr-[100px]"
          aria-label="보조 메뉴"
        >
          <div className="flex flex-1 flex-col items-start justify-center gap-[15px] py-3 text-gray-5">
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="작품 설정"
            >
              <Icon name="import_contacts" size={28} />
              작품 설정
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="집필 활동"
            >
              <Icon name="library_books" size={28} />
              집필 활동
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="인물 관리"
            >
              <Icon name="identity_platform" size={28} />
              인물 관리
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="사건 관리"
            >
              <Icon name="keep" size={28} />
              사건 관리
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="배경 관리"
            >
              <Icon name="planet" size={28} />
              배경 관리
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="스킬 관리"
            >
              <Icon name="star_shine" size={28} />
              스킬 관리
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="아이템 관리"
            >
              <Icon name="business_center" size={28} />
              아이템 관리
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="자료실"
            >
              <Icon name="emoji_objects" size={28} />
              자료실
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="flex p-0 text-gray-6 hover:bg-transform"
              aria-label="투고 관리"
            >
              <Icon name="azm" size={28} />
              투고 관리
            </Button>
          </div>
        </aside>

        <main className="flex min-h-0 flex-1 flex-col px-3 pb-24 md:px-6 md:pb-20">
          <div
            className={cn(
              "flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white",
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
