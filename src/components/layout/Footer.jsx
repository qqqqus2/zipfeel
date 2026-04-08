"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <>
      {/* PC 하단 플로팅 푸터 (본문과 겹침, 카드 위에 떠 있음) */}
      <footer className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 hidden md:block bg-gray-2">
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
          <div>dd</div>
        </div>
      </footer>

      {/* 모바일 하단 액션 바 */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-2 bg-white p-3 md:hidden">
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline" size="sm" className="flex-1">
            취소
          </Button>
          <Button type="button" variant="outline" size="sm" className="flex-1">
            1/10 다음
          </Button>
          <Button type="button" variant="point2" size="sm" className="flex-1">
            저장 후 닫기
          </Button>
        </div>
      </div>
    </>
  );
}
