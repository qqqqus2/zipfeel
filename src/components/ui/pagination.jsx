"use client";

/**
 * 페이지네이션
 *
 * **일반 화면(권장)** — 숫자·ellipsis·처음/이전/다음/끝을 한 번에:
 * ```jsx
 * import { PaginationBar } from "@/components/ui/pagination";
 *
 * <PaginationBar
 *   page={currentPage}
 *   totalPages={total}
 *   getPageHref={(p) => `/list?page=${p}`}
 * />
 * ```
 * - `showFirstLast={false}` 로 처음/끝 숨김
 * - `maxAllPages` / `delta` 로 숫자 노출 범위 조정
 *
 * **커스텀 마크업** — `Pagination` → `PaginationContent` → `PaginationItem` + `PaginationLink` 등 조합
 * (스토리북 `Default` 참고)
 */

import * as React from "react";
import { MoreHorizontal } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationLink = ({ className, isActive, size = "icon", ...props }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: "ghost",
        size,
      }),
      // 밑줄은 border 대신 ::after (클릭 시 두께 변화로 들썩이지 않음). 아래 여백은 고정 pb만 사용.
      "relative rounded-none border-0 bg-transparent pb-[3px] shadow-none",
      "text-gray-6",
      "[&_svg]:shrink-0 [&_svg]:text-current",
      "hover:font-bold hover:bg-transparent hover:text-point-2",
      "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:content-[''] after:opacity-0 after:transition-[opacity,background-color]",
      "active:text-point-1 active:after:bg-point-1 active:after:opacity-100",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-2/40",
      "aria-disabled:pointer-events-none aria-disabled:bg-point-3 aria-disabled:text-point-3 aria-disabled:shadow-none",
      isActive &&
        "font-bold text-point-1 after:bg-point-1 after:opacity-100 hover:text-point-2",
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationFirst = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to first page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <Icon name="keyboard_tab" size={20} className="text-current" aria-hidden />
    <span>처음</span>
  </PaginationLink>
);
PaginationFirst.displayName = "PaginationFirst";

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <Icon
      name="arrow_right_alt"
      size={20}
      className="text-current"
      aria-hidden
    />
    <span className="hidden">이전</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span className="hidden">다음</span>
    <Icon
      name="arrow_right_alt"
      size={20}
      className="-scale-x-100 text-current"
      aria-hidden
    />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationLast = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to last page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>끝</span>
    <Icon
      name="keyboard_tab"
      size={20}
      className="-scale-x-100 text-current"
      aria-hidden
    />
  </PaginationLink>
);
PaginationLast.displayName = "PaginationLast";

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

function getPaginationItems(
  currentPage,
  totalPages,
  delta = 2,
  maxAllPages = 10,
) {
  if (totalPages < 1) return [];
  if (totalPages <= maxAllPages) {
    return Array.from({ length: totalPages }, (_, i) => ({
      type: "page",
      page: i + 1,
    }));
  }

  const set = new Set();
  set.add(1);
  set.add(totalPages);
  for (let p = currentPage - delta; p <= currentPage + delta; p++) {
    if (p >= 1 && p <= totalPages) set.add(p);
  }

  const sorted = [...set].sort((a, b) => a - b);
  const out = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) {
      out.push({ type: "ellipsis", key: `gap-${prev}-${p}` });
    }
    out.push({ type: "page", page: p });
    prev = p;
  }
  return out;
}

function PaginationBar({
  page,
  totalPages,
  getPageHref,
  delta = 2,
  maxAllPages = 10,
  showFirstLast = true,
  className,
  contentClassName,
}) {
  if (totalPages < 1) return null;

  const items = getPaginationItems(page, totalPages, delta, maxAllPages);
  const firstDisabled = page <= 1;
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;
  const lastDisabled = page >= totalPages;

  return (
    <Pagination className={className}>
      <PaginationContent
        className={cn("flex-wrap justify-center", contentClassName)}
      >
        {showFirstLast ? (
          <PaginationItem>
            <PaginationFirst
              href={getPageHref(1)}
              className={cn(firstDisabled && "pointer-events-none opacity-50")}
              aria-disabled={firstDisabled}
              onClick={(e) => firstDisabled && e.preventDefault()}
            />
          </PaginationItem>
        ) : null}
        <PaginationItem>
          <PaginationPrevious
            href={getPageHref(Math.max(1, page - 1))}
            className={cn(prevDisabled && "pointer-events-none opacity-50")}
            aria-disabled={prevDisabled}
            onClick={(e) => prevDisabled && e.preventDefault()}
          />
        </PaginationItem>
        {items.map((item) =>
          item.type === "ellipsis" ? (
            <PaginationItem key={item.key}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item.page}>
              <PaginationLink
                href={getPageHref(item.page)}
                isActive={item.page === page}
              >
                {item.page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            href={getPageHref(Math.min(totalPages, page + 1))}
            className={cn(nextDisabled && "pointer-events-none opacity-50")}
            aria-disabled={nextDisabled}
            onClick={(e) => nextDisabled && e.preventDefault()}
          />
        </PaginationItem>
        {showFirstLast ? (
          <PaginationItem>
            <PaginationLast
              href={getPageHref(totalPages)}
              className={cn(lastDisabled && "pointer-events-none opacity-50")}
              aria-disabled={lastDisabled}
              onClick={(e) => lastDisabled && e.preventDefault()}
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast,
  PaginationEllipsis,
  PaginationBar,
  getPaginationItems,
};
