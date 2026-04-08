/**
 * `div` + CSS Grid 기반 표 (shadcn/ui 스타일).
 *
 * ## 핵심 개념
 * - **데스크톱(`md`+)**: 헤더 + 본문은 `grid-template-columns`로 열 폭을 맞춥니다.
 * - **모바일(`max-md`)**: 본문 행(`TableGridRow`)이 **카드(flex-wrap)** 로 바뀝니다.
 *   이때 셀 배치는 `columns[].mobileClassName`(예: `order-*`, `w-1/2`)로 제어합니다.
 *
 * ## Columns 스키마 (`TableGrid`의 `columns`)
 * 각 원소는 아래 형태를 가집니다.
 *
 * - **key**: (필수) 열 식별자. `TableGridCell columnKey`로 매칭합니다.
 * - **header**: (필수) 헤더에 렌더할 내용(문자열/JSX).
 * - **size / width (열 폭)**:
 *   - `width`: Grid 트랙 문자열(예: `"80px"`, `"minmax(12rem, 2fr)"`) — 있으면 최우선
 *   - `size`: (1) `tableGridColumnSize` 키, (2) Tailwind 너비 유틸(`"w-[80px]"` 등),
 *     (3) Grid 트랙 문자열(예: `"minmax(0, 1fr)"`)
 * - **className**: 헤더 셀(`role="columnheader"`)에 추가 클래스
 * - **cellClassName**: 본문 셀(`TableGridCell`)에 추가 클래스
 * - **mobileClassName**: `max-md` 카드 레이아웃에서 셀 배치/정렬 제어용 클래스
 *
 * ### 헤더 정렬
 * - **TableGrid props**
 *   - `sortable?: boolean` (기본 `false`)
 *   - `sorting?: { id: string; desc: boolean } | null` (제어)
 *   - `onSortingChange?: (next) => void` (제어)
 *   - `defaultSorting?: { id: string; desc: boolean } | null` (비제어 초기값)
 * - **column props**
 *   - `sortKey?: string` (기본: `key`)
 *   - `sortable?: boolean` (`false`면 해당 열 정렬 비활성)
 *   - `sortAlign?: "left" | "center" | "right"` (정렬 버튼 가로 정렬)
 *   - `headerAlign?: "left" | "center" | "right"` (헤더 칸 텍스트 정렬)
 *
 * ## 본문
 * - `TableGridRow`: 본문 행. `value`를 주면 클릭 선택이 켜집니다(`selectable`일 때).
 * - `TableGridCell`: 본문 셀. `columnKey`로 열을 찾아 `size`/`mobileClassName`을 적용합니다.
 *
 * ## TableGrid props (요약)
 * - **columns**: 열 정의 배열
 * - **columnTemplate?**: `grid-template-columns` 전체 문자열로 덮어쓰기
 * - **bordered?**: 바깥 테두리/라운드 적용
 * - **selectable?**: (기본 `true`) 행 클릭 선택 on/off (`TableGridRow value` 필요)
 * - **striped?**: (기본 `false`) `DataTable`과 같은 줄무늬(짝수 인덱스 행 `bg-muted/30`)
 * - **sortable? / sorting? / onSortingChange? / defaultSorting?**: 헤더 정렬
 */
import * as React from "react";

import { cn } from "@/lib/utils";

import { SortIcon } from "./table";

const TableGridContext = React.createContext(null);

/** `table.jsx` `TableSortContext`와 동일 API */
const TableGridSortContext = React.createContext(null);

/** `table.jsx` `useTableSort`와 동일 — `TableGrid` + `sortable` 안에서만 유효 */
export function useTableGridSort() {
  const ctx = React.useContext(TableGridSortContext);
  if (!ctx) {
    return {
      tableSortable: false,
      sorting: null,
      setSorting: () => {},
      toggleSort: () => {},
      getSortState: () => false,
    };
  }
  return ctx;
}

/** `table.jsx`의 `TableBody` + `TableRow` 선택과 동일 */
const TableGridSelectionContext = React.createContext(null);

export function useTableGridContext() {
  const ctx = React.useContext(TableGridContext);
  if (!ctx) {
    throw new Error(
      "TableGridRow / TableGridCell은 TableGrid 안에서만 사용하세요.",
    );
  }
  return ctx;
}

/** `size`에 Tailwind 너비·기준 유틸만 쓸 때 (프리셋 키·원시 트랙과 구분) */
function isTailwindColumnSize(size) {
  if (typeof size !== "string") return false;
  return size
    .trim()
    .split(/\s+/)
    .some((token) => /^(?:w|min-w|max-w|basis)-/.test(token));
}

/**
 * 자주 쓰는 열 너비 프리셋 (CSS Grid 트랙 한 칸).
 * 필요하면 팀에서 키를 더 늘리면 됩니다.
 */
export const tableGridColumnSize = {
  /** 내용 길이만큼 */
  auto: "auto",
  /** 짧은 라벨·번호 */
  content: "max-content",
  /** 남는 가로 폭을 이 열이 가져감 — 긴 메인 열 한 개에 사용 */
  fill: "minmax(0, 1fr)",
  /** `size` 생략 시 */
  default: "minmax(0, 1fr)",
};

/**
 * @param {{ width?: string; size?: string }} column
 * @returns {{ track: string; sizeClassName?: string }}
 */
export function resolveTableGridColumn(column) {
  if (column?.width) {
    return { track: column.width };
  }
  const key = column?.size;
  if (key != null && tableGridColumnSize[key] != null) {
    return { track: tableGridColumnSize[key] };
  }
  if (key != null && typeof key === "string") {
    const trimmed = key.trim();
    if (trimmed && isTailwindColumnSize(trimmed)) {
      return { track: "auto", sizeClassName: trimmed };
    }
    if (trimmed) {
      return { track: trimmed };
    }
  }
  return { track: tableGridColumnSize.default };
}

/**
 * @param {{ width?: string; size?: string }} column
 */
export function resolveTableGridColumnTrack(column) {
  return resolveTableGridColumn(column).track;
}

/**
 * `TableGrid`와 동일한 `grid-template-columns` 문자열 (본문 `role="row"`에 그대로 넣기)
 */
export function getTableGridTemplateColumns(columns = [], columnTemplate) {
  if (columnTemplate) {
    return columnTemplate;
  }
  if (!columns.length) {
    return "minmax(0, 1fr)";
  }
  return columns.map((c) => resolveTableGridColumn(c).track).join(" ");
}

/** `style={{ ...getTableGridTracks(columns, columnTemplate) }}` — 행 `style`에 그대로 펼치기 */
export function getTableGridTracks(columns, columnTemplate) {
  return {
    gridTemplateColumns: getTableGridTemplateColumns(columns, columnTemplate),
  };
}

/** @param {string | undefined} raw */
function normalizeTableGridAlign(raw) {
  if (raw == null || raw === "") return "center";
  if (raw === "start") return "left";
  if (raw === "end") return "right";
  if (raw === "left" || raw === "center" || raw === "right") return raw;
  return "center";
}

function tableGridAlignToJustify(a) {
  if (a === "left") return "justify-start";
  if (a === "right") return "justify-end";
  return "justify-center";
}

function tableGridAlignToText(a) {
  if (a === "left") return "text-left";
  if (a === "right") return "text-right";
  return "text-center";
}

/**
 * `table.jsx` `TableHead`와 동일한 정렬 헤더(버튼 + `SortIcon`).
 * @param {{ col: object }} props
 */
function TableGridColumnHeader({ col }) {
  const ctx = useTableGridSort();
  const sortKey = col.sortKey ?? col.key;
  const columnSortOff = col.sortable === false;
  const enabled = Boolean(ctx.tableSortable && sortKey && !columnSortOff);
  const direction = enabled ? ctx.getSortState(sortKey) : false;

  const cellAlign = normalizeTableGridAlign(
    col.headerAlign ?? col.sortAlign ?? "center",
  );
  const buttonAlign = normalizeTableGridAlign(
    col.sortAlign ?? col.headerAlign ?? "center",
  );

  const cellJustify = tableGridAlignToJustify(cellAlign);
  const cellText = tableGridAlignToText(cellAlign);
  const buttonJustify = tableGridAlignToJustify(buttonAlign);

  const { sizeClassName } = resolveTableGridColumn(col);
  const baseCell = cn(
    "flex min-h-10 items-center px-2 py-2 align-middle [&:has([role=checkbox])]:pr-0",
    cellJustify,
    cellText,
    col.className,
    sizeClassName,
  );

  if (!enabled) {
    return (
      <div role="columnheader" className={baseCell}>
        <span className="min-w-0 truncate">{col.header}</span>
      </div>
    );
  }

  return (
    <div
      role="columnheader"
      className={baseCell}
      aria-sort={
        direction === "asc"
          ? "ascending"
          : direction === "desc"
            ? "descending"
            : "none"
      }
    >
      <button
        type="button"
        className={cn(
          "-m-1 inline-flex h-8 w-full min-w-0 items-center gap-1 rounded-md px-1 font-bold text-inherit hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          buttonJustify,
        )}
        onClick={() => ctx.toggleSort(sortKey)}
      >
        <span className="min-w-0 truncate">{col.header}</span>
        <SortIcon direction={direction} />
      </button>
    </div>
  );
}

/**
 * `table.jsx`의 `TableRow`와 동일: 스트라이프·호버·선택(`data-state=selected` → `gray-2`).
 * `TableBody`의 `selectable`(기본)과 같이 쓰려면 `value`를 넘기세요.
 */
const TableGridRow = React.forwardRef(
  ({ className, children, style, selected, value, ...props }, ref) => {
    const { gridStyle } = useTableGridContext();
    const ctx = React.useContext(TableGridSelectionContext);
    const { "data-state": dataStateProp, onClick, ...rest } = props;

    const isControlled = selected !== undefined;
    const fromContext =
      !isControlled && ctx && value !== undefined && ctx.selectedKey === value;
    const rowSelected = isControlled ? selected === true : fromContext;

    const handleClick = (e) => {
      onClick?.(e);
      if (isControlled) return;
      if (ctx && value !== undefined) {
        ctx.setSelectedKey((prev) => (prev === value ? null : value));
      }
    };

    const isAuto = !isControlled && ctx && value !== undefined;
    const clickable = typeof onClick === "function" || isAuto;

    return (
      <div
        ref={ref}
        role="row"
        style={{ ...style, ...gridStyle }}
        onClick={handleClick}
        data-state={rowSelected ? "selected" : dataStateProp}
        aria-selected={rowSelected ? true : undefined}
        className={cn(
          "grid min-h-12 items-center border-b border-gray-2 bg-white transition-colors last:border-b-0",
          "max-md:!flex max-md:flex-row max-md:flex-wrap max-md:items-stretch max-md:gap-x-2 max-md:gap-y-3",
          "max-md:px-[15px] max-md:py-[20px] max-md:shadow-sm max-md:rounded-0",
          "max-md:[&:nth-child(odd):not([data-state=selected])]:bg-white max-md:[&:nth-child(even):not([data-state=selected])]:!bg-gray-1",
          clickable && "cursor-pointer [&_[role=cell]]:cursor-pointer",
          className,
          "data-[state=selected]:!bg-gray-2 data-[state=selected]:hover:!bg-gray-2",
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
TableGridRow.displayName = "TableGridRow";

export { TableGridRow };

/**
 * @param {object} props
 * @param {string} props.columnKey — `columns[].key`와 동일
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export function TableGridCell({ columnKey, className, children, ...props }) {
  const { columns } = useTableGridContext();
  const col = columns.find((c) => c.key === columnKey);
  const { sizeClassName } = resolveTableGridColumn(col ?? {});
  return (
    <div
      role="cell"
      className={cn(
        "flex min-h-12 min-w-0 items-center px-2 align-middle [&:has([role=checkbox])]:pr-0",
        "max-md:min-h-0 max-md:min-w-0",
        col?.cellClassName,
        col?.mobileClassName,
        sizeClassName,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
TableGridCell.displayName = "TableGridCell";

/**
 * @param {object[]} columns — `header` 필수. `size` 또는 `width`로 열 너비.
 * @param {string} [columnTemplate] — 전체 열을 한 줄로 지정. 있으면 `columns` 트랙 합성보다 우선.
 * @param {boolean} [selectable] — `table.jsx` `TableBody`와 동일, `TableGridRow`에 `value`로 행 선택.
 * @param {boolean} [striped] — `DataTable`의 `striped`와 동일(짝수 인덱스 행에 `bg-muted/30`).
 * @param {boolean} [sortable] — 헤더 정렬 UI·상태 (`table.jsx` `Table` `sortable`과 동일).
 * @param {{ id: string; desc: boolean } | null} [sorting] — 제어 모드 정렬 상태.
 * @param {(next: { id: string; desc: boolean } | null) => void} [onSortingChange]
 * @param {{ id: string; desc: boolean } | null} [defaultSorting] — 비제어 모드 초기값.
 */
export function TableGrid({
  columns = [],
  columnTemplate,
  children,
  className,
  bordered = false,
  selectable = true,
  striped = false,
  sortable = false,
  sorting: sortingProp,
  onSortingChange,
  defaultSorting = null,
}) {
  const [selectedKey, setSelectedKey] = React.useState(null);

  const [uncontrolledSorting, setUncontrolledSorting] =
    React.useState(defaultSorting);
  const isSortingControlled = sortingProp !== undefined;
  const sorting = isSortingControlled ? sortingProp : uncontrolledSorting;

  const setSorting = React.useCallback(
    (next) => {
      const resolved = typeof next === "function" ? next(sorting) : next;
      if (isSortingControlled) {
        onSortingChange?.(resolved);
      } else {
        setUncontrolledSorting(resolved);
      }
    },
    [isSortingControlled, sorting, onSortingChange],
  );

  const toggleSort = React.useCallback(
    (sortKey) => {
      setSorting((prev) => {
        if (!prev || prev.id !== sortKey) return { id: sortKey, desc: false };
        if (!prev.desc) return { id: sortKey, desc: true };
        return null;
      });
    },
    [setSorting],
  );

  const getSortState = React.useCallback(
    (sortKey) => {
      if (!sorting || sorting.id !== sortKey) return false;
      return sorting.desc ? "desc" : "asc";
    },
    [sorting],
  );

  const sortCtxValue = React.useMemo(
    () =>
      sortable
        ? {
            tableSortable: true,
            sorting,
            setSorting,
            toggleSort,
            getSortState,
          }
        : null,
    [sortable, sorting, setSorting, toggleSort, getSortState],
  );

  const gridStyle = React.useMemo(
    () => getTableGridTracks(columns, columnTemplate),
    [columns, columnTemplate],
  );

  const contextValue = React.useMemo(
    () => ({ columns, columnTemplate, gridStyle }),
    [columns, columnTemplate, gridStyle],
  );

  const bodyChildren = React.useMemo(() => {
    if (!striped) return children;
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;
      if (child.type !== TableGridRow) return child;
      return React.cloneElement(child, {
        className: cn(
          child.props.className,
          index % 2 === 0 &&
            "bg-muted/30 hover:bg-muted/40 data-[state=selected]:!bg-gray-2 data-[state=selected]:hover:!bg-gray-2",
        ),
      });
    });
  }, [children, striped]);

  const bodySection = selectable ? (
    <TableGridSelectionContext.Provider value={{ selectedKey, setSelectedKey }}>
      {bodyChildren}
    </TableGridSelectionContext.Provider>
  ) : (
    bodyChildren
  );

  const table = (
    <TableGridContext.Provider value={contextValue}>
      <TableGridSortContext.Provider value={sortCtxValue}>
        <div role="table" className="w-full text-sm">
          <div role="rowgroup" className="hidden md:block">
            <div
              role="row"
              style={gridStyle}
              className="grid min-h-10 border-b border-border bg-gray-2 font-bold text-gray-6"
            >
              {columns.map((col) => (
                <TableGridColumnHeader key={col.key} col={col} />
              ))}
            </div>
          </div>

          <div
            role="rowgroup"
            className={cn(
              " border-b border-border bg-white [&:empty]:min-h-[4rem]",
              "[&_[role=row]]:relative [&_[role=row]]:before:content-[''] [&_[role=row]]:before:hidden [&_[role=row]]:before:absolute [&_[role=row]]:before:inset-0",
              "[&_[role=row]]:before:h-full [&_[role=row]]:before:w-full [&_[role=row]]:before:border-2 [&_[role=row]]:before:border-point-1",
              "[&_[role=row]]:hover:before:block max-md:[&_[role=row]]:first:before:rounded-tl-[10px] max-md:[&_[role=row]]:first:before:rounded-tr-[10px]",
              "max-md:[&_[role=row]]:last:before:rounded-bl-[10px] max-md:[&_[role=row]]:last:before:rounded-br-[10px]",
              "[&_[role=row]]:hover:drop-shadow-sm",
              "[&_[role=row]:nth-child(odd):not([data-state=selected])]:bg-white [&_[role=row]:nth-child(even):not([data-state=selected])]:bg-gray-1 [&_[role=row]]:border-gray-2",
              "max-md:overflow-hidden max-md:rounded-[10px] max-md:border max-md:gap-2 max-md:bg-transparent max-md:p-0",
              "max-md:[&_[role=row]]:hover:border-point-1 max-md:[&_[role=row]]:hover:shadow-md max-md:[&_[role=row]]:hover:drop-shadow-none",
            )}
          >
            {bodySection}
          </div>
        </div>
      </TableGridSortContext.Provider>
    </TableGridContext.Provider>
  );

  return (
    <div className={cn("w-full overflow-auto", className)}>
      {bordered ? (
        <div className="overflow-hidden rounded-md border">{table}</div>
      ) : (
        table
      )}
    </div>
  );
}
TableGrid.displayName = "TableGrid";
