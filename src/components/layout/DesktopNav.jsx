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
import { useTranslation } from "@/hooks/useTranslation";

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
    const { t, language } = useTranslation("navigation");

    // 메뉴 아이템을 번역된 텍스트로 변환
    const translatedMenuItems = menuItems.map((item) => {
        // navigation.json에서 해당 메뉴의 label을 찾아서 반환
        const translationKey = `header.${item.id}`;
        const translatedLabel = t(translationKey);

        return {
            ...item,
            label:
                translatedLabel !== translationKey
                    ? translatedLabel
                    : item.label,
        };
    });

    // 언어 변경 버튼 툴팁 텍스트
    const languageTooltip =
        language === "ko"
            ? "클릭 시 영문으로 변경됩니다."
            : "Click to change to Korean.";

    return (
        <nav
            className={cn(
                "items-center gap-2 relative z-2 hidden md:flex",
                className,
            )}
        >
            {/* 메뉴 아이템들 */}
            {translatedMenuItems.map((menuItem) => (
                <Button
                    key={menuItem.id}
                    type="button"
                    variant="outline"
                    size="md"
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
                        {menuItem.icon && (
                            <Icon name={menuItem.icon} size={24} />
                        )}
                        {menuItem.label}
                    </Link>
                </Button>
            ))}

            {/* Stethoscope 버튼 */}
            <Button
                type="button"
                variant="outline"
                size="md"
                className={cn(
                    "bg-transparent px-0 w-[44px]",
                    borderColor,
                    textColor,
                    hoverBg,
                    `hover:${textColor}`,
                )}
            >
                <Icon name="stethoscope" size={24} />
            </Button>

            {/* 언어 변경 버튼 */}
            {onLanguageChange && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                variant="outline"
                                size="md"
                                className={cn(
                                    "bg-transparent md:ml-0 ml-auto px-0 w-[44px]",
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
                            <p>{languageTooltip}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </nav>
    );
}
