"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header({
    bgColor = "bg-point-1",
    isLoggedIn = true,
    textColor = "text-white",
    borderColor = "border-white/70",
    hoverBg = "hover:bg-white/10",
    logoColor = "text-white",
    logoName = "logo",
}) {
    return (
        <header
            className={cn(
                "relative md:h-[80px] z-20 flex shrink-0 items-center justify-between gap-2 px-4 py-3 md:px-6 md:py-4",
                bgColor,
                textColor,
            )}
        >
            <div className="flex min-w-0 items-center gap-3">
                <Link href="/">
                    <span
                        className={cn(
                            "inline-flex size-9 shrink-0 items-center justify-center text-xs font-semibold",
                            logoColor,
                        )}
                        aria-hidden
                    >
                        <Icon name={logoName} size={40} />
                    </span>
                </Link>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
                {isLoggedIn ? (
                    <>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "bg-transparent",
                                borderColor,
                                textColor,
                                hoverBg,
                                `hover:${textColor}`,
                            )}
                        >
                            <Icon name="logout" size={24} />
                            로그아웃
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "bg-transparent",
                                borderColor,
                                textColor,
                                hoverBg,
                                `hover:${textColor}`,
                            )}
                        >
                            <Icon name="book_4" size={24} />
                            작품 생성
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "bg-transparent",
                                borderColor,
                                textColor,
                                hoverBg,
                                `hover:${textColor}`,
                            )}
                        >
                            <Icon name="book_ribbon" size={24} />
                            작품 목록
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "bg-transparent",
                                borderColor,
                                textColor,
                                hoverBg,
                                `hover:${textColor}`,
                            )}
                        >
                            <Icon name="login" size={24} />
                            로그인
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "bg-transparent",
                                borderColor,
                                textColor,
                                hoverBg,
                                `hover:${textColor}`,
                            )}
                        >
                            <Icon name="account_circle" size={24} />
                            회원가입
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "bg-transparent",
                                borderColor,
                                textColor,
                                hoverBg,
                                `hover:${textColor}`,
                            )}
                        >
                            <Icon name="sell" size={24} />
                            구독 안내
                        </Button>
                    </>
                )}

                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className={cn(
                        "bg-transparent",
                        borderColor,
                        textColor,
                        hoverBg,
                        `hover:${textColor}`,
                    )}
                >
                    <Icon name="ico-lang" size={24} />
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
