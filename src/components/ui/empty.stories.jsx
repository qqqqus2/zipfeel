import React from "react";
import { FolderOpen } from "lucide-react";

import { Button } from "./button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty";

const EMPTY_DOC_PROPS = ["className"];

const meta = {
  title: "UI/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    controls: { include: EMPTY_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 구성 (shadcn Empty)

- **Empty** — 루트 컨테이너(점선 테두리·중앙 정렬·반응형 패딩).
- **EmptyHeader** — 제목·설명·미디어 묶음.
- **EmptyMedia** — 아이콘 슬롯. \`variant\`: \`default\` | \`icon\`(뮤트 배경 원형 영역).
- **EmptyTitle** — 제목.
- **EmptyDescription** — 부가 설명(내부 링크 스타일 포함).
- **EmptyContent** — 버튼·폼 등 액션 영역.`,
      },
      controls: { include: EMPTY_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Empty 루트에 추가 클래스",
    },
  },
};

export default meta;

export const Default = {
  render: () => (
    <Empty className="w-full max-w-md border border-gray-2">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen className="size-6" aria-hidden />
        </EmptyMedia>
        <EmptyTitle>폴더가 비어 있습니다</EmptyTitle>
        <EmptyDescription>
          파일을 업로드하거나 새 폴더를 만드세요. <a href="#">도움말 보기</a>
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button" size="sm">
          업로드
        </Button>
        <Button type="button" variant="outline" size="sm">
          취소
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const MediaDefault = {
  name: "미디어 default",
  render: () => (
    <Empty className="w-full max-w-md border border-gray-2">
      <EmptyHeader>
        <EmptyMedia variant="default">
          <FolderOpen className="size-10 text-muted-foreground" aria-hidden />
        </EmptyMedia>
        <EmptyTitle>검색 결과 없음</EmptyTitle>
        <EmptyDescription>다른 키워드로 다시 검색해 보세요.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};
