"use client";

import { useState, useMemo } from "react";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Eye, Gem, History, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    TableGrid,
    TableGridCell,
    TableGridRow,
} from "@/components/ui/table-grid";
import { sortTableRows } from "@/components/ui/table";
import { PaginationBar } from "@/components/ui/pagination";

// gridRichRows 데이터
const gridRichRows = [
    {
        id: "3456",
        role: "엑스트라",
        status: "일이",
        metaLines: [
            { label: "호칭", text: "일이삼사오육칠팔구십" },
            { label: "애칭", text: "일이삼사오육칠팔구십" },
        ],
        title: "이름 텍스트가 길 때 이름 텍스트가 길 때… 이름 텍스트가 길 때 이름 텍스트가 길 때… 이름 텍스트가 길 때 이름 텍스트가 길 때…",
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
    {
        id: "1234",
        role: "주연",
        status: "완료",
        metaLines: [
            { label: "호칭", text: "캐릭터5" },
            { label: "애칭", text: "별명5" },
        ],
        title: "다섯 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 5",
    },
    {
        id: "5678",
        role: "조연",
        status: "일이",
        metaLines: [{ label: "호칭", text: "캐릭터6" }],
        title: "여섯 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 6",
    },
    {
        id: "9012",
        role: "엑스트라",
        status: "대기",
        metaLines: [
            { label: "호칭", text: "캐릭터7" },
            { label: "애칭", text: "별명7" },
        ],
        title: "일곱 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 7",
    },
    {
        id: "3457",
        role: "주연",
        status: "완료",
        metaLines: [{ label: "호칭", text: "캐릭터8" }],
        title: "여덟 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 8",
    },
    {
        id: "7890",
        role: "조연",
        status: "일이",
        metaLines: [
            { label: "호칭", text: "캐릭터9" },
            { label: "애칭", text: "별명9" },
        ],
        title: "아홉 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 9",
    },
    {
        id: "2468",
        role: "엑스트라",
        status: "대기",
        metaLines: [{ label: "호칭", text: "캐릭터10" }],
        title: "열 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 10",
    },
    {
        id: "1357",
        role: "주연",
        status: "완료",
        metaLines: [
            { label: "호칭", text: "캐릭터11" },
            { label: "애칭", text: "별명11" },
        ],
        title: "열한 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 11",
    },
    {
        id: "9753",
        role: "조연",
        status: "일이",
        metaLines: [{ label: "호칭", text: "캐릭터12" }],
        title: "열두 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 12",
    },
];

// 테이블 컬럼 정의
const gridColumns = [
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
        key: "title",
        header: "이름",
        size: "fill",
        sortable: true,
        headerAlign: "left",
        mobileClassName: "max-md:order-4 max-md:w-full max-md:p-0",
    },
];

// 상세 셀 컴포넌트
function GridRichDetailCell({ row }) {
    const lastMetaIndex = Math.max(0, (row.metaLines?.length ?? 0) - 1);
    return (
        <div className="flex min-w-0 flex-1 flex-col gap-2 py-1 md:flex-row md:items-center md:justify-between md:gap-2">
            <div className="flex min-w-0 flex-col gap-0.5">
                <div className="flex min-w-0 flex-nowrap items-center gap-x-1 text-xs text-muted-foreground">
                    {row.metaLines.map((line, i) => (
                        <div
                            key={`${i}-${line.label}`}
                            className="flex items-center"
                        >
                            {i > 0 ? (
                                <span
                                    className="shrink-0 text-muted-foreground"
                                    aria-hidden
                                >
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
                                        i === lastMetaIndex
                                            ? "min-w-0 truncate"
                                            : "shrink-0",
                                    )}
                                >
                                    {line.text}
                                </span>
                            </p>
                        </div>
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
                <Button
                    type="button"
                    variant="ghost"
                    size="iconSm"
                    aria-label="강조"
                >
                    <Gem className="size-4" />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="iconSm"
                    aria-label="수정"
                >
                    <Pencil className="size-4" />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="iconSm"
                    aria-label="보기"
                >
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

// 캐릭터 목록 탭 콘텐츠
function CharacterListContent() {
    const [gridSorting, setGridSorting] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const gridSortedRows = useMemo(
        () => sortTableRows(gridRichRows, gridSorting),
        [gridSorting],
    );

    // 페이지네이션 적용
    const totalPages = Math.ceil(gridRichRows.length / itemsPerPage);
    const paginatedRows = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return gridSortedRows.slice(startIndex, endIndex);
    }, [gridSortedRows, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // 스크롤을 테이블 상단으로 이동
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="w-full max-w-[630px] mx-auto py-6">
            <div className="flex justify-between items-center mb-6">
                <div>{gridRichRows.length} 개</div>
                <div className="flex gap-2">
                    <Button
                        variant="oulinePoint1"
                        rounded="full"
                        size="sm"
                        className="gap-2 min-w-[100px] text-sm font-bold shadow-sm"
                    >
                        <Icon name="category_search" size={20} />
                        상세 검색
                    </Button>
                    <Button
                        variant="oulinePoint1"
                        rounded="full"
                        size="sm"
                        className="gap-2 min-w-[100px] text-sm font-bold shadow-sm  "
                    >
                        <Icon name="add" size={20} />
                        캐릭터 등록
                    </Button>
                </div>
            </div>

            <TableGrid
                columns={gridColumns}
                striped
                sortable
                sorting={gridSorting}
                onSortingChange={setGridSorting}
            >
                {paginatedRows.map((row) => (
                    <TableGridRow key={row.id} value={row.id}>
                        <TableGridCell
                            columnKey="id"
                            className="text-muted-foreground tabular-nums"
                        >
                            <span className="flex items-start gap-2 md:contents">
                                <span className="hidden text-xs font-medium text-muted-foreground max-md:inline-block max-md:[writing-mode:vertical-rl] max-md:leading-tight">
                                    회차
                                </span>
                                <span className="md:tabular-nums">
                                    {row.id}
                                </span>
                            </span>
                        </TableGridCell>
                        <TableGridCell
                            columnKey="role"
                            className="justify-center"
                        >
                            {row.role}
                        </TableGridCell>
                        <TableGridCell
                            columnKey="status"
                            className="justify-center"
                        >
                            {row.status}
                        </TableGridCell>
                        <TableGridCell columnKey="title" className="min-w-0">
                            <GridRichDetailCell row={row} />
                        </TableGridCell>
                    </TableGridRow>
                ))}
            </TableGrid>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
                <div className="mt-8">
                    <div
                        onClick={(e) => {
                            const href = e.target
                                .closest("a")
                                ?.getAttribute("href");
                            if (href && href.startsWith("#page-")) {
                                e.preventDefault();
                                const page = parseInt(
                                    href.replace("#page-", ""),
                                );
                                handlePageChange(page);
                            }
                        }}
                    >
                        <PaginationBar
                            page={currentPage}
                            totalPages={totalPages}
                            getPageHref={(page) => `#page-${page}`}
                            showFirstLast={false}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default function CharacterList() {
    const tabs = [
        {
            value: "list",
            label: "캐릭터 목록",
            content: <CharacterListContent />,
        },
    ];

    return (
        <CommonLayout
            title="캐릭터 설정"
            description="작중 출연하는 캐릭터를 한눈에 확인할 수 있습니다."
            showTabs={true}
            tabs={tabs}
            defaultTab="list"
        />
    );
}
