"use client";

import * as React from "react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export function CommonLnb() {
    return (
        <aside
            className="hidden w-14 h-full shrink-0 flex-col bg-transform md:flex md:w-auto md:left-[30px] fixed"
            aria-label="보조 메뉴"
        >
            <div className="flex flex-1 flex-col items-start justify-center gap-[15px] py-3 text-gray-5">
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="작품 설정"
                >
                    <Icon name="import_contacts" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="집필 활동"
                >
                    <Icon name="library_books" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="인물 관리"
                >
                    <Icon name="identity_platform" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="사건 관리"
                >
                    <Icon name="keep" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="배경 관리"
                >
                    <Icon name="planet" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="스킬 관리"
                >
                    <Icon name="star_shine" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="아이템 관리"
                >
                    <Icon name="business_center" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="자료실"
                >
                    <Icon name="emoji_objects" size={28} />
                </Button>
                <Button
                    variant="ghost"
                    size="default"
                    className="flex p-0 text-gray-6 hover:bg-transform"
                    aria-label="투고 관리"
                >
                    <Icon name="azm" size={28} />
                </Button>
            </div>
        </aside>
    );
}
