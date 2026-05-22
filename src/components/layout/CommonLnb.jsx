"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { sidebarMenuItems } from "@/data/menuData";

export function CommonLnb() {
    const pathname = usePathname();

    return (
        <aside
            className="hidden w-14 h-full shrink-0 flex-col bg-transform md:flex md:w-auto md:left-[30px] fixed"
            aria-label="보조 메뉴"
        >
            <TooltipProvider delayDuration={300}>
                <div className="flex flex-1 flex-col items-start justify-center gap-[15px] py-3 text-gray-5">
                    {sidebarMenuItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <Tooltip key={item.id}>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="default"
                                        className={`flex p-0 hover:bg-transform transition-colors ${
                                            isActive
                                                ? "text-point-2"
                                                : "text-gray-6"
                                        }`}
                                        aria-label={item.label}
                                        asChild
                                    >
                                        <Link href={item.path}>
                                            <Icon name={item.icon} size={28} />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="bg-gray-6 text-white">
                                    <div className="text-sm font-medium">{item.label}</div>
                                    {item.description && (
                                        <div className="text-xs text-gray-3 mt-1 max-w-[200px]">
                                            {item.description}
                                        </div>
                                    )}
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </div>
            </TooltipProvider>
        </aside>
    );
}
