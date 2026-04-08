import * as React from "react";
import { Info, Pencil } from "lucide-react";
import { Button } from "./button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item";

const ITEM_DOC_PROPS = ["variant", "size", "asChild"];

const meta = {
  title: "UI/Item",
  component: Item,
  parameters: {
    layout: "padded",
    controls: { include: ITEM_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (Item 루트)

- **variant** — \`default\`, \`outline\`, \`muted\` 등 카드형 행 스타일.
- **size** — \`default\` / \`sm\` 패딩·간격.
- **asChild** — \`true\`면 루트를 자식 한 요소로 렌더(Slot).

제목·설명·액션은 \`ItemTitle\`, \`ItemDescription\`, \`ItemActions\` 등 하위 컴포넌트로 구성합니다.`,
      },
      controls: { include: ITEM_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
      description: "테두리·배경 톤",
    },
    size: {
      control: "select",
      options: ["default", "sm"],
      description: "패딩·간격",
    },
    asChild: {
      control: "boolean",
      description: "true면 자식으로 루트 렌더(Slot)",
    },
  },
};

export default meta;

export const Default = {
  render: () => (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>컬럼명</ItemTitle>
          <ItemDescription>설정 안함</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon" aria-label="편집">
            <Pencil className="size-4" />
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const WithInfoAndActions = {
  render: () => (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemContent>
          <ItemHeader>
            <ItemTitle className="flex items-center gap-1">
              컬럼명
              <Button
                variant="ghost"
                size="icon"
                className="size-6"
                aria-label="설명"
              >
                <Info className="size-[14px]" />
              </Button>
            </ItemTitle>
            <ItemActions>
              <Button variant="ghost" size="icon" aria-label="편집">
                <Pencil className="size-4" />
              </Button>
            </ItemActions>
          </ItemHeader>
          <ItemDescription>설정 안함</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithMedia = {
  render: () => (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Info className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>알림</ItemTitle>
          <ItemDescription>새 메시지가 도착했습니다.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="secondary">
            보기
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>default</ItemTitle>
          <ItemDescription>배경 투명</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>outline</ItemTitle>
          <ItemDescription>테두리</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>muted</ItemTitle>
          <ItemDescription>연한 배경</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const ItemGroupList = {
  render: () => (
    <div className="w-full max-w-md">
      <ItemGroup className="rounded-md border">
        <Item variant="default" className="rounded-none border-0">
          <ItemContent>
            <ItemTitle>첫 번째</ItemTitle>
            <ItemDescription>설명 텍스트</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item variant="default" className="rounded-none border-0">
          <ItemContent>
            <ItemTitle>두 번째</ItemTitle>
            <ItemDescription>설명 텍스트</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item variant="default" className="rounded-none border-0">
          <ItemContent>
            <ItemTitle>세 번째</ItemTitle>
            <ItemDescription>설명 텍스트</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const GridOfItems = {
  render: () => {
    return (
      <div className="w-full max-w-4xl">
        <div className="grid w-full grid-cols-3 gap-4">
          <Item variant="outline" className="">
            <ItemContent>
              <ItemTitle>01</ItemTitle>
              <ItemDescription>설정 안함</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="">
            <ItemContent>
              <ItemTitle>02</ItemTitle>
              <ItemDescription>설정 안함</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="">
            <ItemContent>
              <ItemTitle>02</ItemTitle>
              <ItemDescription>설정 안함</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="col-span-2">
            <ItemContent>
              <ItemTitle>03</ItemTitle>
              <ItemDescription>설정 안함</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="">
            <ItemContent>
              <ItemTitle>02</ItemTitle>
              <ItemDescription>설정 안함</ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline" className="col-span-3">
            <ItemContent>
              <ItemTitle>04</ItemTitle>
              <ItemDescription>col-span-2</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>
    );
  },
};
