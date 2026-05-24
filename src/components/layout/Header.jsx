"use client";

import * as React from "react";

import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { headerMenuLoggedIn, headerMenuLoggedOut } from "@/data/menuData";
import { useRouter } from "next/navigation";
import { MobileNav } from "@/components/layout/MobileNav";
import { DesktopNav } from "@/components/layout/DesktopNav";

export function Header({
    bgColor = "bg-point-1",
    isLoggedIn = true, // true로 하면 로그인 된 상태로 변함
    textColor = "text-white",
    borderColor = "border-white/70",
    hoverBg = "hover:bg-white/10",
    logoColor = "text-white",
    logoName = "logo",
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const router = useRouter();

    const handleLanguageChange = () => {
        // TODO: 언어를 한글로 변경하는 로직
        router.push("/");
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
                    "relative md:h-[80px] flex shrink-0 items-center justify-between gap-2 pl-8 pr-6 py-3 md:px-6 md:py-4",
                    isMobileMenuOpen ? "z-[100] !bg-point-1" : "z-20",
                    bgColor,
                    textColor,
                )}
            >
                <div className="flex min-w-0 items-center gap-3 relative z-2">
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
                </div>

                {!isMobileMenuOpen && (
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
                    />
                )}

                {/* 메뉴 버튼 모바일에서만 보임 */}
                <div className="flex ml-auto gap-3 md:hidden self-start relative z-2">
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className={cn(
                            "bg-transparent border-0 md:ml-0 ml-auto",
                            isMobileMenuOpen ? "border-white/70" : borderColor,
                            isMobileMenuOpen ? "text-white" : textColor,
                            isMobileMenuOpen ? "hover:bg-white/10" : hoverBg,
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
                            isMobileMenuOpen ? "hover:bg-white/10" : hoverBg,
                        )}
                        aria-label="메뉴"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
