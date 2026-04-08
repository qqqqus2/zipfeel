import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-gray-6 md:text-3xl">
          메인 영역 (흰 카드 안만 스크롤)
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          회색 배경·헤더는 고정이고, 이 흰색 카드 내부만 세로 스크롤됩니다.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/sub">서브 페이지</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href="#section-bottom">아래로 스크롤 테스트</a>
        </Button>
      </div>

      <div className="space-y-4 rounded-md border border-dashed border-gray-200 p-4">
        <p className="text-sm text-gray-6">
          긴 콘텐츠를 넣어 스크롤이 카드 안에서만 생기는지 확인하세요.
        </p>
        {Array.from({ length: 24 }).map((_, i) => (
          <p key={i} className="text-sm leading-relaxed text-gray-5">
            줄 {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
      </div>

      <p id="section-bottom" className="text-sm font-medium text-point-2">
        스크롤 끝 — 푸터는 화면 하단에 고정됩니다.
      </p>
    </div>
  );
}
