"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { headerMenuLoggedIn, headerMenuLoggedOut } from "@/data/menuData";

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
                        {headerMenuLoggedIn.map((menuItem) => (
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
                                    "bg-transparent",
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
