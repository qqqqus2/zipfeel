"use client";

import * as React from "react";

import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { headerMenuLoggedIn, headerMenuLoggedOut } from "@/data/menuData";
import { MobileNav } from "@/components/layout/MobileNav";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { useTranslation } from "@/hooks/useTranslation";
import { Chips } from "@/components/ui/chips";

export function Header({
    bgColor = "bg-point-1",
    isLoggedIn = true, // true로 하면 로그인 된 상태로 변함
    textColor = "text-white",
    borderColor = "border-white/70",
    hoverBg = "hover:bg-white/10",
    logoColor = "text-white",
    logoName = "logo",
    chipsVariant = "orange",
    titleTextColor = "text-sub-8",
    showDetailHeader = false,
    showWorkTitle = true,
    onBack,
    onPreview,
    onDelete,
    onSave,
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { language, changeLanguage } = useTranslation();

    const handleLanguageChange = () => {
        // 현재 언어에 따라 토글 (ko <-> en)
        const newLanguage = language === "ko" ? "en" : "ko";
        changeLanguage(newLanguage);
    };

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "relative md:h-[80px] flex shrink-0 items-center gap-2 pl-8 pr-6 py-3 md:px-6 md:py-4",
                    isMobileMenuOpen ? "z-[100] !bg-point-1" : "z-20",
                    showDetailHeader ? "pl-5" : "pl-8",
                    bgColor,
                    textColor,
                )}
            >
                <div className="flex min-w-0 items-center gap-3 relative z-2">
                    {showDetailHeader ? (
                        <>
                            {/* 모바일: 이전 페이지 버튼 */}
                            <Button
                                type="button"
                                variant="ghost"
                                size="iconSm"
                                className="text-[#474554] md:hidden"
                                aria-label="이전 페이지"
                                onClick={onBack}
                            >
                                <Icon name="arrow_left_alt" size={24} />
                            </Button>
                            {/* PC: 로고 */}
                            <Link href="/" className="hidden md:block">
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
                        </>
                    ) : (
                        <Link href="/">
                            <span
                                className={cn(
                                    "inline-flex size-9 shrink-0 items-center justify-center text-xs font-semibold",
                                    isMobileMenuOpen ? "text-white" : logoColor,
                                )}
                                aria-hidden
                            >
                                <Icon
                                    name={isMobileMenuOpen ? "logo" : logoName}
                                    size={40}
                                />
                            </span>
                        </Link>
                    )}
                </div>

                {!isMobileMenuOpen && (
                    <>
                        {showWorkTitle && (
                            <div className="hidden xl:flex items-center gap-5 absolute left-[250px] lg:left-[150px]">
                                <Chips variant={chipsVariant}>연재</Chips>
                                <strong
                                    className={cn(
                                        "fz-18 font-medium",
                                        titleTextColor,
                                    )}
                                >
                                    선택한 작품명이 노출됩니다.
                                </strong>
                            </div>
                        )}
                        <DesktopNav
                            menuItems={
                                isLoggedIn
                                    ? headerMenuLoggedIn
                                    : headerMenuLoggedOut
                            }
                            borderColor={borderColor}
                            textColor={textColor}
                            hoverBg={hoverBg}
                            onLanguageChange={handleLanguageChange}
                            className="ml-auto"
                        />
                    </>
                )}

                {/* 메뉴 버튼 모바일에서만 보임 */}
                {!showDetailHeader ? (
                    <div className="flex ml-auto gap-3 md:hidden self-start relative z-2">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "bg-transparent border-0 md:ml-0 ml-auto",
                                isMobileMenuOpen
                                    ? "border-white/70"
                                    : borderColor,
                                isMobileMenuOpen ? "text-white" : textColor,
                                isMobileMenuOpen
                                    ? "hover:bg-white/10"
                                    : hoverBg,
                                isMobileMenuOpen
                                    ? "hover:text-white"
                                    : `hover:${textColor}`,
                            )}
                            onClick={handleLanguageChange}
                        >
                            <Icon name="ico-lang" size={24} />
                        </Button>
                        {/* 모바일 GNB 버튼 */}
                        <Button
                            type="button"
                            variant="ghost"
                            size="iconSm"
                            className={cn(
                                "flex",
                                isMobileMenuOpen ? "text-white" : textColor,
                                isMobileMenuOpen
                                    ? "hover:bg-white/10"
                                    : hoverBg,
                            )}
                            aria-label="메뉴"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <Icon
                                name={
                                    isMobileMenuOpen
                                        ? "collapse_content_30"
                                        : "more_vert"
                                }
                                size={24}
                            />
                        </Button>
                    </div>
                ) : (
                    <div className="flex ml-auto gap-3 md:hidden self-start relative z-2">
                        <Button
                            type="button"
                            variant="ghost"
                            size="iconSm"
                            className="text-[#474554]"
                            aria-label="삭제"
                            onClick={onDelete}
                        >
                            <Icon name="ink_eraser" size={24} />
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="iconSm"
                            className="text-[#474554]"
                            aria-label="저장"
                            onClick={onSave}
                        >
                            <Icon name="folder_check_2" size={24} />
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="iconSm"
                            className="text-[#474554]"
                            aria-label="미리보기"
                            onClick={onPreview}
                        >
                            <Icon name="eyeglasses" size={24} />
                        </Button>
                    </div>
                )}
            </header>

            {/* 모바일 GNB */}
            <MobileNav
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                menuItems={
                    isLoggedIn ? headerMenuLoggedIn : headerMenuLoggedOut
                }
            />
        </>
    );
}
