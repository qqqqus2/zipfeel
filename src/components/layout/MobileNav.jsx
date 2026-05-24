"use client";

import * as React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * MobileNav - 모바일 전체 화면 네비게이션 컴포넌트
 *
 * @param {boolean} isOpen - 네비게이션 열림/닫힘 상태
 * @param {function} onClose - 닫기 핸들러
 * @param {Array} menuItems - 메뉴 아이템 배열
 * @param {string} className - 추가 CSS 클래스
 */
export function MobileNav({ isOpen, onClose, menuItems = [], className }) {
    // 네비게이션이 열려있지 않으면 렌더링하지 않음
    if (!isOpen) return null;

    // 메뉴 아이템이 없으면 렌더링하지 않음
    if (menuItems.length === 0) return null;

    // 링크 클릭 시 메뉴 닫기
    const handleLinkClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <article
            className={cn(
                "fixed top-0 overflow-y-auto pb-15 right-0 left-0 bottom-0 bg-point-1 px-8 pt-[67px] min-w-[300px] z-50",
                className,
            )}
        >
            <div className="flex flex-col gap-5">
                {/* 첫 두 개의 메뉴 아이템 - 가로로 나란히 (50%씩) */}
                {menuItems.length >= 2 && (
                    <div className="flex flex-row gap-2.5">
                        {menuItems.slice(0, 2).map((menuItem) => (
                            <Button
                                key={menuItem.id}
                                type="button"
                                variant="outline"
                                size="md"
                                className="bg-transparent flex-1 border-white/70 text-white hover:bg-white/10 hover:text-white"
                                asChild
                            >
                                <Link
                                    href={menuItem.path}
                                    onClick={handleLinkClick}
                                >
                                    {menuItem.icon && (
                                        <Icon name={menuItem.icon} size={24} />
                                    )}
                                    {menuItem.label}
                                </Link>
                            </Button>
                        ))}
                    </div>
                )}

                {/* 나머지 메뉴 아이템들 - 세로로 */}
                {menuItems.slice(2).map((menuItem) => (
                    <Button
                        key={menuItem.id}
                        type="button"
                        variant="outline"
                        size="md"
                        className="bg-transparent w-full border-white/70 text-white hover:bg-white/10 hover:text-white"
                        asChild
                    >
                        <Link href={menuItem.path} onClick={handleLinkClick}>
                            {menuItem.icon && (
                                <Icon name={menuItem.icon} size={24} />
                            )}
                            {menuItem.label}
                        </Link>
                    </Button>
                ))}

                {/* 메뉴 아이템이 1개만 있는 경우 */}
                {menuItems.length === 1 && (
                    <Button
                        key={menuItems[0].id}
                        type="button"
                        variant="outline"
                        size="md"
                        className="bg-transparent w-full border-white/70 text-white hover:bg-white/10 hover:text-white"
                        asChild
                    >
                        <Link
                            href={menuItems[0].path}
                            onClick={handleLinkClick}
                        >
                            {menuItems[0].icon && (
                                <Icon name={menuItems[0].icon} size={24} />
                            )}
                            {menuItems[0].label}
                        </Link>
                    </Button>
                )}
            </div>
        </article>
    );
}
