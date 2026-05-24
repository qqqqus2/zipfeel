"use client";

import * as React from "react";
import { Icon } from "@/components/ui/icon";

export function Footer() {
    return (
        <>
            {/* PC 하단 플로팅 푸터 (본문과 겹침, 카드 위에 떠 있음) */}
            <footer className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 bg-gray-1 text-[14px] lg:pt-0 pt-[30px]">
                <div className="pointer-events-auto mx-auto flex px-6 lg:px-5 pb-5 pt-2 max-w-[1400px] m-auto text-gray-6 flex-col lg:flex-row gap-4 lg:gap-0">
                    <div className="flex gap-[15px]  lg:flex-row flex-col">
                        <div className="flex justify-between items-center gap-1 ">
                            <a
                                href="#"
                                className="flex items-center gap-1  transition-colors"
                            >
                                <Icon name="more" size={18} />
                                사업자 정보 상세보기
                            </a>
                            <a href="#" className="block lg:hidden">
                                도움누리
                            </a>
                        </div>
                        <div className="flex gap-4 lg:inline-flex">
                            <a href="#" className=" transition-colors">
                                이용약관
                            </a>
                            <a href="#" className=" transition-colors">
                                개인정보처리방침
                            </a>
                        </div>

                        <span className="">
                            통신판매업신고번호 : 제 0000-일이삼사-00000
                        </span>
                        <a href="#" className="hidden lg:block">
                            도움누리
                        </a>
                    </div>

                    <div className="lg:ml-auto">
                        <span className=" transition-colors">
                            © 2026. 유한회사 올음. All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
