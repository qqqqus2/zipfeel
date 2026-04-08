import * as React from "react";
import { Eye, Gem, History, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  tableGridColumnSize,
  TableGrid,
  TableGridCell,
  TableGridRow,
} from "./table-grid";
import {
  DataTable,
  ResponsiveTableCard,
  ResponsiveTableLayout,
  sortTableRows,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

const splitDemoRows = [
  { id: "001", role: "엑스트라", status: "초고", summary: "한줄 요약 텍스트" },
  { id: "002", role: "주연", status: "완료", summary: "다른 요약" },
  { id: "003", role: "조연", status: "대기", summary: "또 다른 요약" },
];

/** TableGrid 복합 행 예시 — 문자열 배열이 아니라 객체 + 셀 안에 JSX(버튼·다단 레이아웃) */
const gridRichRows = [
  {
    id: "3456",
    role: "엑스트라",
    status: "일이",
    metaLines: [
      { label: "호칭", text: "일이삼사오육칠팔구십" },
      { label: "애칭", text: "일이삼사오육칠팔구십" },
    ],
    title:
      "이름 텍스트가 길 때 이름 텍스트가 길 때… 이름 텍스트가 길 때 이름 텍스트가 길 때… 이름 텍스트가 길 때 이름 텍스트가 길 때…",
    summary: "한줄 요약 (최대 30자)",
  },
  {
    id: "2345",
    role: "엑스트라",
    status: "일이",
    metaLines: [{ label: "호칭", text: "일이삼사오육칠팔구십" }],
    title: "다른 제목이 매우 길 때 줄임표로 처리합니다…",
    summary: "요약 한 줄",
  },
  {
    id: "4567",
    role: "주연",
    status: "완료",
    metaLines: [
      { label: "호칭", text: "일이삼사" },
      { label: "애칭", text: "오육칠팔" },
    ],
    title: "제목 텍스트",
    summary: "최대 30자 요약 예시",
  },
  {
    id: "8901",
    role: "조연",
    status: "대기",
    metaLines: [{ label: "호칭", text: "일이삼사오육칠팔구십일이삼사" }],
    title: "네 번째 행 제목입니다…",
    summary: "한줄 요약 (최대 30자)",
  },
];

const defaultStoryRows = [
  { id: "003", role: "엑스트라", status: "일이" },
  { id: "001", role: "엑스트라", status: "일이" },
  { id: "002", role: "엑스트라", status: "일이" },
  { id: "004", role: "엑스트라", status: "일이" },
  { id: "005", role: "엑스트라", status: "일이" },
];

/**
 * TableGrid — `headerAlign` / `sortAlign`: `left` | `center` | `right`
 * `mobileClassName`: `max-md`에서 행이 flex-wrap 카드가 될 때 셀 `order`·너비로 첫 줄 2칸 등 배치
 */
const gridStep1Columns = [
  {
    key: "id",
    header: "No.",
    size: "w-[80px]",
    sortAlign: "left",
    mobileClassName:
      "max-md:order-3 max-md:w-full max-md:justify-start max-md:pt-1",
  },
  {
    key: "role",
    header: "구분",
    size: "w-[80px]",
    mobileClassName:
      "max-md:order-1 max-md:w-[calc(50%-4px)] max-md:shrink-0 max-md:justify-start max-md:font-semibold",
  },
  {
    key: "status",
    header: "상태",
    size: "w-[80px]",
    headerAlign: "left",
    mobileClassName:
      "max-md:order-2 max-md:flex max-md:w-[calc(50%-4px)] max-md:shrink-0 max-md:justify-end max-md:text-sm max-md:text-muted-foreground",
  },
  {
    key: "name",
    header: "긴 헤더 텍스트",
    size: "fill",
    sortable: false,
    headerAlign: "left",
    mobileClassName: "max-md:order-4 max-md:w-full max-md:p-0",
  },
];

const sortDemoColumns = [
  {
    key: "id",
    header: "No.",
    className: "w-20",
    sortAlign: "start",
    cellClassName: "text-muted-foreground",
  },
  { key: "role", header: "구분", className: "w-18" },
  {
    key: "status",
    header: "상태",
    className: "w-18",
    cellClassName: "text-center",
  },
  {
    key: "name",
    header: "이름",
    sortable: false,
    render: () => (
      <div className="flex items-center justify-between gap-1">
        <div className="flex flex-col gap-0.5">
          <div className="flex flex-wrap items-center gap-1 [&>p+p]:before:inline-block [&>p+p]:before:shrink-0 [&>p+p]:before:text-muted-foreground [&>p+p]:before:content-['·']">
            <p className="m-0 flex items-center gap-1">
              <span className="font-bold">호칭</span>
              <span>일이삼사오육칠팔구십</span>
            </p>
            <p className="m-0 flex items-center gap-1">
              <span className="font-bold">호칭</span>
              <span>일이삼사오육칠팔구십</span>
            </p>
            <p className="m-0 flex items-center gap-1">
              <span className="font-bold">호칭</span>
              <span>일이삼사오육칠팔구십</span>
            </p>
          </div>
          <p className="max-w-lg truncate font-medium">
            이름 텍스트가 길 때 이름 텍스트가 길 때…
          </p>
          <p className="max-w-lg truncate text-xs">한줄 요약 (최대 30자)</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Button type="button" variant="ghost" size="sm">
            <Eye className="size-4" />
            보기
          </Button>
          <Button type="button" variant="ghost" size="sm">
            <Eye className="size-4" />
            보기
          </Button>
          <Button type="button" variant="ghost" size="sm">
            <Eye className="size-4" />
            보기
          </Button>
        </div>
      </div>
    ),
  },
];

function GridRichDetailCell({ row }) {
  const lastMetaIndex = Math.max(0, (row.metaLines?.length ?? 0) - 1);
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 py-1 md:flex-row md:items-center md:justify-between md:gap-2">
      <div className="flex min-w-0 flex-col gap-0.5">
        <div className="flex min-w-0 flex-nowrap items-center gap-x-1 text-xs text-muted-foreground">
          {row.metaLines.map((line, i) => (
            <React.Fragment key={`${i}-${line.label}`}>
              {i > 0 ? (
                <span className="shrink-0 text-muted-foreground" aria-hidden>
                  ·
                </span>
              ) : null}
              <p
                className={cn(
                  "m-0 flex items-center gap-1",
                  i === lastMetaIndex && "min-w-0 flex-1",
                )}
              >
                <span className="shrink-0 font-bold text-foreground">
                  {line.label}
                </span>
                <span
                  className={cn(
                    i === lastMetaIndex ? "min-w-0 truncate" : "shrink-0",
                  )}
                >
                  {line.text}
                </span>
              </p>
            </React.Fragment>
          ))}
        </div>
        <p className="m-0 min-w-0 text-sm font-bold max-md:whitespace-normal max-md:break-words md:truncate">
          {row.title}
        </p>
        <p className="m-0 min-w-0 text-xs text-muted-foreground max-md:whitespace-normal max-md:break-words md:truncate">
          {row.summary}
        </p>
      </div>
      <div className="hidden shrink-0 items-center gap-0.5 md:flex">
        <Button type="button" variant="ghost" size="iconSm" aria-label="강조">
          <Gem className="size-4" />
        </Button>
        <Button type="button" variant="ghost" size="iconSm" aria-label="수정">
          <Pencil className="size-4" />
        </Button>
        <Button type="button" variant="ghost" size="iconSm" aria-label="보기">
          <Eye className="size-4" />
        </Button>
      </div>
      <div className="flex w-full flex-wrap items-center justify-between gap-x-1 gap-y-2 md:hidden">
        <Button type="button" variant="ghost" size="sm">
          <Eye className="size-4" />
          보기
        </Button>
        <Button type="button" variant="ghost" size="sm">
          <History className="size-4" />
          과거 이력
        </Button>
        <Button type="button" variant="ghost" size="sm">
          <Gem className="size-4" />
          수정
        </Button>
      </div>
    </div>
  );
}

function TableStoriesDemo() {
  const [gridSorting, setGridSorting] = React.useState(null);
  const gridSortedRows = React.useMemo(
    () => sortTableRows(gridRichRows, gridSorting),
    [gridSorting],
  );

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-14 py-2">
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">
          <code className="font-normal text-muted-foreground">DataTable</code> —
          data · columns · sortable · striped · bordered
        </h3>
        <p className="text-sm text-muted-foreground">
          복잡한 셀만 <code>render</code>로 넘기면 됩니다. 정렬은 내부 상태(또는{" "}
          <code>sorting</code> / <code>onSortingChange</code>로 제어).
        </p>
        <DataTable
          data={defaultStoryRows}
          columns={sortDemoColumns}
          sortable
          striped
        />
      </section>

      <section className="space-y-2">
        <TableGrid
          columns={gridStep1Columns}
          striped
          sortable
          sorting={gridSorting}
          onSortingChange={setGridSorting}
        >
          {gridSortedRows.map((row) => (
            <TableGridRow key={row.id} value={row.id}>
              <TableGridCell
                columnKey="id"
                className="text-muted-foreground tabular-nums"
              >
                <span className="flex items-start gap-2 md:contents">
                  <span className="hidden text-xs font-medium text-muted-foreground max-md:inline-block max-md:[writing-mode:vertical-rl] max-md:leading-tight">
                    회차
                  </span>
                  <span className="md:tabular-nums">{row.id}</span>
                </span>
              </TableGridCell>
              <TableGridCell columnKey="role" className="justify-center">
                {row.role}
              </TableGridCell>
              <TableGridCell columnKey="status" className="justify-center">
                {row.status}
              </TableGridCell>
              <TableGridCell columnKey="name" className="min-w-0">
                <GridRichDetailCell row={row} />
              </TableGridCell>
            </TableGridRow>
          ))}
        </TableGrid>
      </section>
    </div>
  );
}

export const Default = {
  render: () => <TableStoriesDemo />,
};
