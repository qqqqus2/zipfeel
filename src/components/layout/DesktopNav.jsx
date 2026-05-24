"use client";

import * as React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/**
 * DesktopNav - 데스크톱 네비게이션 컴포넌트
 *
 * @param {Array} menuItems - 메뉴 아이템 배열
 * @param {string} borderColor - 테두리 색상
 * @param {string} textColor - 텍스트 색상
 * @param {string} hoverBg - 호버 배경색
 * @param {function} onLanguageChange - 언어 변경 핸들러
 * @param {string} className - 추가 CSS 클래스
 */
export function DesktopNav({
    menuItems = [],
    borderColor = "border-white/70",
    textColor = "text-white",
    hoverBg = "hover:bg-white/10",
    onLanguageChange,
    className,
}) {
    return (
        <nav className={cn("items-center gap-2 relative z-2 hidden md:flex", className)}>
            {/* 메뉴 아이템들 */}
            {menuItems.map((menuItem) => (
                <Button
                    key={menuItem.id}
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
                    asChild
                >
                    <Link href={menuItem.path}>
                        {menuItem.icon && <Icon name={menuItem.icon} size={24} />}
                        {menuItem.label}
                    </Link>
                </Button>
            ))}

            {/* 언어 변경 버튼 */}
            {onLanguageChange && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className={cn(
                                    "bg-transparent md:ml-0 ml-auto",
                                    borderColor,
                                    textColor,
                                    hoverBg,
                                    `hover:${textColor}`,
                                )}
                                onClick={onLanguageChange}
                            >
                                <Icon name="ico-lang" size={24} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent
                            side="bottom"
                            align="end"
                            className="whitespace-nowrap text-right max-w-none"
                        >
                            <p>
                                클릭 시 한글로 변경되며 메인 화면으로 이동합니다.
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </nav>
    );
}
