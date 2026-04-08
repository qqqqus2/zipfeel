import Link from "next/link";

export default function SubPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-6">서브 페이지</h1>
      <p className="text-muted-foreground">
        리스트 / 상세 등 동일한 메인 레이아웃 안에서 쓰면 됩니다.
      </p>
      <Link href="/" className="text-sm font-medium text-point-2 underline-offset-2 hover:underline">
        ← 홈으로
      </Link>
    </div>
  );
}
