"use client";

import * as React from "react";

import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { headerMenuLoggedIn, headerMenuLoggedOut } from "@/data/menuData";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";

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

    return (
        //
        <header
            className={cn(
                "relative md:h-[80px] flex shrink-0 items-center justify-between gap-2 pl-8 pr-6 py-3 md:px-6 md:py-4",
                isMobileMenuOpen ? "z-[100]" : "z-20",
                bgColor,
                textColor,
            )}
        >
            <div className="flex min-w-0 items-center gap-3 relative z-2">
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

            {!isMobileMenuOpen && (
                <nav className=" items-center gap-2 relative z-2 hidden md:flex">
                    {isLoggedIn ? (
                        <>
                            {headerMenuLoggedIn.map((menuItem) => (
                                <Button
                                    key={menuItem.id}
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className={cn(
                                        "bg-transparent ",
                                        borderColor,
                                        textColor,
                                        hoverBg,
                                        `hover:${textColor}`,
                                    )}
                                    asChild
                                >
                                    <Link href={menuItem.path}>
                                        {menuItem.icon && (
                                            <Icon
                                                name={menuItem.icon}
                                                size={24}
                                            />
                                        )}
                                        {menuItem.label}
                                    </Link>
                                </Button>
                            ))}
                        </>
                    ) : (
                        <>
                            {headerMenuLoggedOut.map((menuItem) => (
                                <Button
                                    key={menuItem.id}
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className={cn(
                                        "bg-transparent ",
                                        borderColor,
                                        textColor,
                                        hoverBg,
                                        `hover:${textColor}`,
                                    )}
                                    asChild
                                >
                                    <Link href={menuItem.path}>
                                        {menuItem.label}
                                    </Link>
                                </Button>
                            ))}
                        </>
                    )}

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
                                    onClick={handleLanguageChange}
                                >
                                    <Icon name="ico-lang" size={24} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" align="end">
                                <p className="">
                                    클릭 시 한글로 변경되며 메인 화면으로
                                    이동합니다.
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            )}

            {/* 메뉴 버튼 모바일에서만 보임 */}
            <div className="flex ml-auto gap-3 md:hidden self-start relative z-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className={cn(
                                    "bg-transparent border-0 md:ml-0 ml-auto",
                                    borderColor,
                                    textColor,
                                    hoverBg,
                                    `hover:${textColor}`,
                                )}
                                onClick={handleLanguageChange}
                            >
                                <Icon name="ico-lang" size={24} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="end">
                            <p>
                                클릭 시 한글로 변경되며 메인 화면으로
                                이동합니다.
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {/* 모바일 GNB 버튼 */}
                <Button
                    type="button"
                    variant="ghost"
                    size="iconSm"
                    className=" text-white flex hover:bg-white/10"
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

            {/* 모바일 GNB */}
            {isMobileMenuOpen && (
                <article className="fixed top-0 right-0 left-0 bottom-0 bg-point-1 px-8 pt-[67px] min-w-[300px]">
                    <div className="flex flex-col gap-5">
                        {isLoggedIn ? (
                            <>
                                {/* 로그아웃 / 작품 생성 - 나란히 50% */}
                                <div className="flex flex-row gap-2.5">
                                    {headerMenuLoggedIn
                                        .slice(0, 2)
                                        .map((menuItem) => (
                                            <Button
                                                key={menuItem.id}
                                                type="button"
                                                variant="outline"
                                                size="md"
                                                className={cn(
                                                    "bg-transparent flex-1",
                                                    borderColor,
                                                    textColor,
                                                    hoverBg,
                                                    `hover:${textColor}`,
                                                )}
                                                asChild
                                            >
                                                <Link href={menuItem.path}>
                                                    {menuItem.icon && (
                                                        <Icon
                                                            name={menuItem.icon}
                                                            size={24}
                                                        />
                                                    )}
                                                    {menuItem.label}
                                                </Link>
                                            </Button>
                                        ))}
                                </div>
                                {/* 나머지 버튼들 - 세로로 */}
                                {headerMenuLoggedIn.slice(2).map((menuItem) => (
                                    <Button
                                        key={menuItem.id}
                                        type="button"
                                        variant="outline"
                                        size="md"
                                        className={cn(
                                            "bg-transparent w-full",
                                            borderColor,
                                            textColor,
                                            hoverBg,
                                            `hover:${textColor}`,
                                        )}
                                        asChild
                                    >
                                        <Link href={menuItem.path}>
                                            {menuItem.icon && (
                                                <Icon
                                                    name={menuItem.icon}
                                                    size={24}
                                                />
                                            )}
                                            {menuItem.label}
                                        </Link>
                                    </Button>
                                ))}
                            </>
                        ) : (
                            <>
                                {/* 로그인 / 회원가입 - 나란히 50% */}
                                <div className="flex flex-row gap-[10px]">
                                    {headerMenuLoggedOut
                                        .slice(0, 2)
                                        .map((menuItem) => (
                                            <Button
                                                key={menuItem.id}
                                                type="button"
                                                variant="outline"
                                                size="md"
                                                className={cn(
                                                    "bg-transparent flex-1",
                                                    borderColor,
                                                    textColor,
                                                    hoverBg,
                                                    `hover:${textColor}`,
                                                )}
                                                asChild
                                            >
                                                <Link href={menuItem.path}>
                                                    {menuItem.icon && (
                                                        <Icon
                                                            name={menuItem.icon}
                                                            size={24}
                                                        />
                                                    )}
                                                    {menuItem.label}
                                                </Link>
                                            </Button>
                                        ))}
                                </div>
                                {/* 나머지 버튼들 - 세로로 */}
                                {headerMenuLoggedOut
                                    .slice(2)
                                    .map((menuItem) => (
                                        <Button
                                            key={menuItem.id}
                                            type="button"
                                            variant="outline"
                                            size="md"
                                            className={cn(
                                                "bg-transparent w-full",
                                                borderColor,
                                                textColor,
                                                hoverBg,
                                                `hover:${textColor}`,
                                            )}
                                            asChild
                                        >
                                            <Link href={menuItem.path}>
                                                {menuItem.icon && (
                                                    <Icon
                                                        name={menuItem.icon}
                                                        size={24}
                                                    />
                                                )}
                                                {menuItem.label}
                                            </Link>
                                        </Button>
                                    ))}
                            </>
                        )}
                    </div>
                </article>
            )}
        </header>
    );
}
