"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative md:h-[80px] z-20 flex shrink-0 items-center justify-between gap-2 bg-point-1 px-4 py-3 text-white md:px-6 md:py-4">
      <div className="flex min-w-0 items-center gap-3">
        <Link href="/">
          <span
            className="inline-flex size-9 shrink-0 items-center justify-center text-xs font-semibold text-white "
            aria-hidden
          >
            <Icon name="logo" size={40} />
          </span>
        </Link>
      </div>

      <nav className="hidden items-center gap-2 md:flex">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <Icon name="login" size={24} />
          로그인
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <Icon name="account_circle" size={24} />
          회원가입
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <Icon name="sell" size={24} />
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
