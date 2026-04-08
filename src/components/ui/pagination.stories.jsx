import React from "react";
import {
  Pagination,
  PaginationBar,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLink,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

const PAGINATION_DOC_PROPS = ["className"];

const meta = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    controls: { include: PAGINATION_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **className** — \`<nav>\` 루트에 붙는 Tailwind·추가 클래스.

페이지 링크·이전/다음 등은 \`PaginationContent\`, \`PaginationItem\`, \`PaginationLink\`, \`PaginationPrevious\` 등 하위 컴포넌트로 조합합니다.`,
      },
      controls: { include: PAGINATION_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "루트 nav에 붙는 Tailwind·추가 클래스",
    },
  },
};

export default meta;

export const Default = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={true}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithEllipsis = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={true}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

/**
 * 총 페이지가 10 이하이면 숫자를 1~10까지 모두 나열해도 됨.
 * (실서비스에서는 `totalPages`에 따라 map으로 렌더)
 */
export const TenPages = {
  render: () => (
    <PaginationBar
      page={5}
      totalPages={10}
      getPageHref={(p) => `#page=${p}`}
    />
  ),
};

/**
 * 총 페이지가 10을 넘으면 숫자를 전부 안 보여 주고,
 * 앞·뒤 + 중간 일부 + …(ellipsis) + First/Previous/Next/Last 로 "창"을 옮기는 패턴이 일반적.
 * 앱에서는 아래 `PaginationBar` 한 줄로 동일한 UI를 쓰면 됨.
 */
export const ManyPagesWindowed = {
  render: () => (
    <PaginationBar
      page={6}
      totalPages={24}
      getPageHref={(p) => `#page=${p}`}
    />
  ),
};
