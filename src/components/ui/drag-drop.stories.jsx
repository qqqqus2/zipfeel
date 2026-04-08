"use client";

import * as React from "react";
import { DragDropBoard } from "./drag-drop";

const meta = {
  title: "UI/DragDrop",
  component: DragDropBoard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

const initial = [
  {
    id: "todo",
    title: "TODO",
    description: "해야 할 일",
    items: [
      { id: "t-1", title: "장면 1 자료 정리", meta: "오늘 마감" },
      { id: "t-2", title: "대사 초안 작성", meta: "1차 버전" },
      { id: "t-3", title: "캐릭터 설정 보강", meta: "참고 링크 포함" },
    ],
  },
  {
    id: "doing",
    title: "DOING",
    description: "진행 중",
    items: [
      { id: "d-1", title: "테이블 컴포넌트 리팩터", meta: "반응형 카드 유지" },
      { id: "d-2", title: "스토리북 정리", meta: "UI 카테고리 재정렬" },
    ],
  },
  {
    id: "done",
    title: "DONE",
    description: "완료",
    items: [
      { id: "x-1", title: "아이콘 스프라이트 빌드", meta: "스크립트 추가" },
    ],
  },
];

function BoardStory() {
  const [containers, setContainers] = React.useState(initial);

  return (
    <div className="min-h-[60vh]">
      <DragDropBoard containers={containers} onContainersChange={setContainers} />
    </div>
  );
}

export const Board = {
  render: () => <BoardStory />,
};

function SingleColumnLikeImageStory() {
  const [containers, setContainers] = React.useState([
    {
      id: "column-1",
      title: "컬럼",
      description: "드래그로 순서 변경",
      variant: "list",
      handlePlacement: "end",
      items: [
        { id: "i-1", title: "내용", meta: "" },
        { id: "i-2", title: "내용", meta: "" },
        {
          id: "i-3",
          title: "체크박스는 Left Pannel 및 Preview를 통해서만 설정 가능",
          meta: "",
        },
        {
          id: "i-4",
          title:
            "체크박스는 최대 30개까지 등록 가능하며 Check에 따라 Progress를 제네페이지가 자동 계산됨 - 체크 수 / 전체 수",
          meta: "",
        },
        { id: "i-5", title: "Drag & Drop 시 번호는 자동으로 변경", meta: "" },
        {
          id: "i-6",
          title: "요금제별로 신규 추가 가능 건 수 다름: 무료 3 / 유료 10 / 센서 30",
          meta: "",
        },
      ],
    },
  ]);

  return (
    <div className="mx-auto w-full max-w-md py-8">
      <DragDropBoard containers={containers} onContainersChange={setContainers} />
    </div>
  );
}

export const SingleColumnLikeImage = {
  render: () => <SingleColumnLikeImageStory />,
  parameters: {
    layout: "padded",
  },
};
