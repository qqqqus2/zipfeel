/**
 * Table 스펙 (요약)
 *
 * [기본]
 * - `thead`가 아닌 `tbody`의 `TableRow`를 클릭해 선택하면 배경이 `gray-2`로 바뀝니다.
 *   (`TableBody` 기본 `selectable` + `TableRow`에 `value` 필요)
 *
 * [props — 정렬]
 * - `Table` · `sortable` (boolean, 기본 false): 테이블 전체에 정렬 기능 사용 여부
 * - `TableHead` · `sortKey` (string): 정렬 열 식별자. `Table.sortable`이 true이면 `sortKey`만 있어도 정렬 UI가 나옵니다.
 * - `TableHead` · `sortable` (boolean, 선택): `false`로 두면 해당 열만 정렬 비활성(같은 줄에 `sortKey`가 있어도 끔)
 * - `TableHeaderRowFromColumns` · `columns[]`: `key` / `header` / `sortable` / `sortAlign` / `className` 배열로 헤더 한 줄을 간단히 정의
 * - `sortable`을 켜도 `tbody` 행 선택(클릭)과는 독립입니다. `TableBody` 기본 `selectable` + `TableRow` `value`면 그대로 동작합니다.
 *
 * [반응형 — 테이블 + div 카드]
 * - `ResponsiveTableLayout`: `desktop`에는 기존 `<Table>…`, `mobile`에는 `div`/카드(보통 `ResponsiveTableCard`)를 넘깁니다. `<table>` 밖에서만 감싸므로 마크업이 유효합니다.
 *
 * [간단 사용 — DataTable]
 * - `data` + `columns` + 선택적으로 `sortable` / `striped` / `selectable` / `rowKey` / `emptyMessage` / `bordered`
 * - 복잡한 셀은 `columns[].render(row, index)` 로만 덮어쓰면 됩니다.
 */
import * as React from "react";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

const TableSelectionContext = React.createContext(null);

const TableSortContext = React.createContext(null);

/**
 * 정렬 방향 표시(헤더 버튼·TanStack 등에서 재사용 가능).
 * `direction`: `"asc"` | `"desc"` | `false` | `undefined`
 */
function SortIcon({ direction }) {
  if (direction === "asc")
    return <ArrowUp className="size-4 shrink-0 opacity-60" aria-hidden />;
  if (direction === "desc")
    return <ArrowDown className="size-4 shrink-0 opacity-60" aria-hidden />;
  return <ChevronsUpDown className="size-4 shrink-0 opacity-50" aria-hidden />;
}

/**
 * `Table`에 `sortable`이 켜져 있을 때만 유효한 컨텍스트입니다.
 * @returns {{
 *   tableSortable: boolean;
 *   sorting: { id: string; desc: boolean } | null;
 *   setSorting: (next: { id: string; desc: boolean } | null | ((prev: { id: string; desc: boolean } | null) => { id: string; desc: boolean } | null)) => void;
 *   toggleSort: (sortKey: string) => void;
 *   getSortState: (sortKey: string) => false | "asc" | "desc";
 * }}
 */
function useTableSort() {
  const ctx = React.useContext(TableSortContext);
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

/**
 * 행 배열을 `sorting` 기준으로 한 번 정렬합니다. 원본은 바꾸지 않고 복사본을 반환합니다.
 * @template T
 * @param {T[]} rows
 * @param {{ id: string; desc: boolean } | null} sorting
 * @param {(row: T, columnId: string) => unknown} [getValue] 기본: `row[columnId]`
 */
function sortTableRows(rows, sorting, getValue) {
  if (!sorting || !Array.isArray(rows) || rows.length === 0) return rows;
  const { id, desc } = sorting;
  const getV =
    getValue ??
    ((row, columnId) => {
      const v = row[columnId];
      return v;
    });
  return [...rows].sort((a, b) => {
    const va = getV(a, id);
    const vb = getV(b, id);
    const cmp = compareValues(va, vb);
    return desc ? -cmp : cmp;
  });
}

function compareValues(a, b) {
  if (Object.is(a, b)) return 0;
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
}

const Table = React.forwardRef(
  (
    {
      className,
      /** 테이블 전체 정렬 기능 on/off */
      sortable = false,
      sorting: sortingProp,
      onSortingChange,
      defaultSorting = null,
      children,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledSorting, setUncontrolledSorting] =
      React.useState(defaultSorting);
    const isControlled = sortingProp !== undefined;
    const sorting = isControlled ? sortingProp : uncontrolledSorting;

    const setSorting = React.useCallback(
      (next) => {
        const resolved = typeof next === "function" ? next(sorting) : next;
        if (isControlled) {
          onSortingChange?.(resolved);
        } else {
          setUncontrolledSorting(resolved);
        }
      },
      [isControlled, sorting, onSortingChange],
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

    const ctxValue = React.useMemo(
      () => ({
        tableSortable: true,
        sorting,
        setSorting,
        toggleSort,
        getSortState,
      }),
      [sorting, setSorting, toggleSort, getSortState],
    );

    return (
      <TableSortContext.Provider value={sortable ? ctxValue : null}>
        <div className="relative w-full overflow-auto">
          <table
            ref={ref}
            className={cn("w-full caption-bottom text-sm ", className)}
            {...props}
          >
            {children}
          </table>
        </div>
      </TableSortContext.Provider>
    );
  },
);
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

/**
 * selectable=true(기본)일 때 행 클릭으로 선택 상태를 tbody 안에서 관리합니다.
 * 선택 해제는 `TableBody`에 `key={...}`로 리마운트하거나 `selectable={false}` 후 직접 제어하세요.
 */
const TableBody = React.forwardRef(
  ({ className, selectable = true, children, ...props }, ref) => {
    const [selectedKey, setSelectedKey] = React.useState(null);

    let idx = 0;
    const rows = selectable
      ? React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          const v = child.props.value !== undefined ? child.props.value : idx++;
          return React.cloneElement(child, { value: v });
        })
      : children;

    const tbody = (
      <tbody
        ref={ref}
        className={cn(
          "[&_tr]:hover:border-2 [&_tr]:hover:border-point-1 [&_tr]:hover:drop-shadow-sm [&_tr]:even:bg-gray-1 [&_tr]:border-gray-2",
          className,
        )}
        {...props}
      >
        {rows}
      </tbody>
    );

    if (!selectable) {
      return tbody;
    }

    return (
      <TableSelectionContext.Provider value={{ selectedKey, setSelectedKey }}>
        {tbody}
      </TableSelectionContext.Provider>
    );
  },
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

/**
 * `tbody` 전용 선택: `TableBody`가 `selectable`(기본 true)이면 `value`로 행을 구분하고,
 * 클릭 시 선택 배경 `gray-2`. `selected`를 넘기면 부모 제어(클릭으로 내부 토글 없음).
 */
const TableRow = React.forwardRef(
  ({ className, selected, value, ...props }, ref) => {
    const ctx = React.useContext(TableSelectionContext);
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
      <tr
        ref={ref}
        onClick={handleClick}
        data-state={rowSelected ? "selected" : dataStateProp}
        aria-selected={rowSelected ? true : undefined}
        className={cn(
          "border-b bg-white transition-colors",
          clickable && "cursor-pointer [&_td]:cursor-pointer",
          className,
          "data-[state=selected]:!bg-gray-2",
        )}
        {...rest}
      />
    );
  },
);
TableRow.displayName = "TableRow";

/**
 * `Table.sortable`이 true일 때만 의미 있습니다.
 * - `sortKey`: 정렬 식별자 (`sorting.id`와 동일). 있으면 기본적으로 정렬 UI 표시
 * - `sortable={false}`: 해당 열만 정렬 끔 (`sortKey`가 있어도 무시)
 * - `sortAlign`: 정렬 버튼 가로 정렬
 */
const TableHead = React.forwardRef(
  (
    {
      className,
      /** 명시적으로 `false`면 이 열만 정렬 비활성 */
      sortable: columnSortable,
      sortKey,
      sortAlign = "center",
      children,
      ...props
    },
    ref,
  ) => {
    const ctx = React.useContext(TableSortContext);
    const columnSortOff = columnSortable === false;
    const enabled = Boolean(ctx?.tableSortable && sortKey && !columnSortOff);
    const direction = enabled ? ctx.getSortState(sortKey) : false;

    const justify =
      sortAlign === "end"
        ? "justify-end"
        : sortAlign === "start"
          ? "justify-start"
          : "justify-center";

    if (!enabled) {
      return (
        <th
          ref={ref}
          className={cn(
            "h-10 px-2 bg-gray-2 text-center text-gray-6 align-middle font-bold [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            className,
          )}
          {...props}
        >
          {children}
        </th>
      );
    }

    return (
      <th
        ref={ref}
        className={cn(
          "h-10 px-2 bg-gray-2 text-center text-gray-6 align-middle font-bold [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          className,
        )}
        aria-sort={
          direction === "asc"
            ? "ascending"
            : direction === "desc"
              ? "descending"
              : "none"
        }
        {...props}
      >
        <button
          type="button"
          className={cn(
            "-m-1 inline-flex h-8 w-full min-w-0 items-center gap-1 rounded-md px-1 font-bold text-inherit hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            justify,
          )}
          onClick={() => ctx.toggleSort(sortKey)}
        >
          <span className="min-w-0 truncate">{children}</span>
          <SortIcon direction={direction} />
        </button>
      </th>
    );
  },
);
TableHead.displayName = "TableHead";

/**
 * `stackLabel`: 모바일용 CSS 스택 등에서 `data-label`로 쓰는 열 이름(선택)
 */
const TableCell = React.forwardRef(
  ({ className, stackLabel, ...props }, ref) => (
    <td
      ref={ref}
      data-label={stackLabel}
      className={cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

/**
 * 정렬 헤더를 컬럼 배열로 한 번에 정의할 때 사용합니다.
 * `sortable !== false` 이면 `sortKey`로 `key`를 씁니다.
 *
 * @param {{ key: string; header: React.ReactNode; sortable?: boolean; sortAlign?: "start" | "center" | "end"; className?: string }[]} columns
 */
function TableHeaderRowFromColumns({ columns, className: rowClassName, ...rowProps }) {
  return (
    <TableRow className={rowClassName} {...rowProps}>
      {columns.map((col) => (
        <TableHead
          key={col.key}
          sortKey={col.sortable === false ? undefined : col.key}
          sortable={col.sortable}
          sortAlign={col.sortAlign ?? "center"}
          className={col.className}
        >
          {col.header}
        </TableHead>
      ))}
    </TableRow>
  );
}
TableHeaderRowFromColumns.displayName = "TableHeaderRowFromColumns";

/**
 * `md` 이상: `desktop`(보통 `<Table>…`)
 * `md` 미만: `mobile`(보통 `div` + 행마다 카드)
 */
function ResponsiveTableLayout({ desktop, mobile, className }) {
  return (
    <div className={cn("w-full", className)}>
      <div className="hidden md:block">{desktop}</div>
      <div className="md:hidden">{mobile}</div>
    </div>
  );
}
ResponsiveTableLayout.displayName = "ResponsiveTableLayout";

/** 모바일 카드 한 장의 껍데기(`article` + border·radius) */
function ResponsiveTableCard({ className, children, ...props }) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-card p-4 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
ResponsiveTableCard.displayName = "ResponsiveTableCard";

/**
 * @typedef {{
 *   key: string;
 *   header: React.ReactNode;
 *   sortable?: boolean;
 *   sortAlign?: "start" | "center" | "end";
 *   className?: string;
 *   cellClassName?: string;
 *   render?: (row: Record<string, unknown>, rowIndex: number) => React.ReactNode;
 * }} DataTableColumn
 */

/**
 * `data` + `columns`만 넘기면 헤더·바디·정렬(선택)·빈 목록까지 한 번에 렌더합니다.
 */
function DataTable({
  data,
  columns,
  sortable = false,
  sorting: sortingProp,
  onSortingChange,
  defaultSorting = null,
  /** 행 `key` / 선택 `value`로 쓸 필드명, 또는 `(row, i) => value` */
  rowKey = "id",
  selectable = true,
  striped = false,
  emptyMessage = "No data",
  bordered = false,
  className,
  tableClassName,
  headerRowClassName = "bg-muted/50 hover:bg-muted/50",
}) {
  const [internalSorting, setInternalSorting] = React.useState(defaultSorting);
  const isControlled = sortingProp !== undefined;
  const sorting = isControlled ? sortingProp : internalSorting;
  const handleSortingChange = isControlled
    ? onSortingChange
    : setInternalSorting;

  const rows = React.useMemo(() => {
    if (!sortable || !sorting) return data ?? [];
    return sortTableRows(data ?? [], sorting);
  }, [data, sortable, sorting]);

  const resolveRowValue = React.useCallback(
    (row, index) => {
      if (typeof rowKey === "function") return rowKey(row, index);
      return row[rowKey];
    },
    [rowKey],
  );

  const tableInner = (
    <Table
      sortable={sortable}
      sorting={sortable ? sorting : undefined}
      onSortingChange={sortable ? handleSortingChange : undefined}
      defaultSorting={defaultSorting}
      className={tableClassName}
    >
      <TableHeader>
        <TableHeaderRowFromColumns
          columns={columns}
          className={headerRowClassName}
        />
      </TableHeader>
      <TableBody selectable={selectable}>
        {!rows.length ? (
          <TableRow>
            <TableCell colSpan={columns.length}>{emptyMessage}</TableCell>
          </TableRow>
        ) : (
          rows.map((row, index) => (
            <TableRow
              key={String(resolveRowValue(row, index) ?? index)}
              value={resolveRowValue(row, index)}
              className={
                striped && index % 2 === 0
                  ? "bg-muted/30 hover:bg-muted/40"
                  : undefined
              }
            >
              {columns.map((col) => (
                <TableCell key={col.key} className={col.cellClassName}>
                  {col.render
                    ? col.render(row, index)
                    : (row[col.key] ?? null)}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );

  return (
    <div className={cn("w-full", className)}>
      {bordered ? (
        <div className="overflow-hidden rounded-md border">{tableInner}</div>
      ) : (
        tableInner
      )}
    </div>
  );
}
DataTable.displayName = "DataTable";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  SortIcon,
  useTableSort,
  sortTableRows,
  TableHeaderRowFromColumns,
  ResponsiveTableLayout,
  ResponsiveTableCard,
  DataTable,
};
