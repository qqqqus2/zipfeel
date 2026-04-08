"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="relative md:h-[80px] z-20 flex shrink-0 items-center justify-between gap-2 bg-point-1 px-4 py-3 text-white md:px-6 md:py-4">
      <div className="flex min-w-0 items-center gap-3">
        <span
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-xs font-semibold text-white ring-1 ring-white/30"
          aria-hidden
        >
          LOGO
        </span>
        <span className="hidden text-sm font-medium text-white/90 sm:inline">
          Zipfeel
        </span>
      </div>

      <nav className="hidden items-center gap-2 md:flex">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          로그인
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          회원가입
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          구독 안내
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          한글
        </Button>
      </nav>

      <Button
        type="button"
        variant="ghost"
        size="iconSm"
        className="md:hidden text-white hover:bg-white/10"
        aria-label="메뉴"
      >
        <Menu className="size-6" />
      </Button>
    </header>
  );
}
