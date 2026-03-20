import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-8 p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js + shadcn/ui + Tailwind CSS
          </h1>
          <p className="text-muted-foreground text-lg">
            프로젝트 설정이 완료되었습니다!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>shadcn/ui 컴포넌트를 사용할 준비가 되었습니다.</p>
          <p className="mt-2">
            더 많은 컴포넌트를 추가하려면:{" "}
            <code className="bg-muted px-2 py-1 rounded">
              npx shadcn@latest add [component-name]
            </code>
          </p>
        </div>
      </main>
    </div>
  );
}
