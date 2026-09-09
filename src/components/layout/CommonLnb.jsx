"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { sidebarMenuItems } from "@/data/menuData";

export function CommonLnb() {
    const pathname = usePathname();

    return (
        <aside
            className="hidden h-full shrink-0 flex-col bg-transform 2xl:flex md:left-[30px] fixed z-40"
            aria-label="보조 메뉴"
        >
            <div className="flex flex-1 flex-col items-start justify-center gap-[15px] py-3 text-gray-5">
                {sidebarMenuItems.map((item) => {
                    // 인물 관리 메뉴는 /character-list와 /character-settings 모두 active
                    const isActive =
                        item.id === "character-management"
                            ? pathname === "/character-list" ||
                              pathname === "/character-settings"
                            : pathname === item.path;

                    return (
                        <div
                            key={item.id}
                            className="group relative flex items-center"
                        >
                            <Button
                                variant="ghost"
                                size="default"
                                className={`flex items-center h-[34px] p-0 overflow-hidden w-[34px] rounded-full active:bg-point-2 ${
                                    isActive
                                        ? "bg-point-1 text-white rounded-full group-hover:w-auto"
                                        : "text-gray-6 group-hover:bg-point-1 group-hover:text-white group-hover:w-auto"
                                }`}
                                aria-label={item.label}
                                asChild
                            >
                                <Link
                                    href={item.path}
                                    className="flex items-center gap-2"
                                >
                                    <div
                                        className={`flex items-center justify-center w-[34px] h-[34px] shrink-0 ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-6 group-hover:text-white"
                                        }`}
                                    >
                                        <Icon
                                            name={item.icon}
                                            size={27}
                                            className="[&_svg]:fill-current"
                                        />
                                    </div>
                                    {/* 호버 시 나타나는 타이틀 */}
                                    <span className="whitespace-nowrap pr-4 text-[18px] text-white font-semibold hidden max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] group-hover:inline-block">
                                        {item.label}
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}
