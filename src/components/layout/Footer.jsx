"use client";

import * as React from "react";

export function Footer() {
    return (
        <>
            {/* PC 하단 플로팅 푸터 (본문과 겹침, 카드 위에 떠 있음) */}
            <footer className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 bg-gray-2">
                <div className="pointer-events-auto mx-auto flex max-w-4xl justify-center px-6 pb-5 pt-2">
                    <div className="rounded-full bg-white/95 px-6 py-2.5 text-center text-xs text-gray-5 shadow-lg backdrop-blur-sm ring-1 ring-gray-2/80">
                        <a href="#" className="hover:text-point-2">
                            사업자 정보 상세보기
                        </a>

                        <a href="#" className="hover:text-point-2">
                            이용약관
                        </a>
                        <a href="#" className="hover:text-point-2">
                            개인정보처리방침
                        </a>
                        <span className="text-gray-4">
                            통신판매업신고번호 : 제 0000-일이삼사-00000
                        </span>
                        <a href="#" className="hover:text-point-2">
                            도움누리
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
