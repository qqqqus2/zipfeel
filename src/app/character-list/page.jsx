"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    TableGrid,
    TableGridCell,
    TableGridRow,
} from "@/components/ui/table-grid";
import { sortTableRows } from "@/components/ui/table";
import { PaginationBar } from "@/components/ui/pagination";
import { characterData, statusIconMap } from "@/data/characterData";
import { useTranslation } from "@/hooks/useTranslation";

// gridRichRows 데이터 (공유 데이터 사용)
const gridRichRows = characterData;

// 상세 셀 컴포넌트
function GridRichDetailCell({ row }) {
    const { t } = useTranslation("common");
    const lastMetaIndex = Math.max(0, (row.metaLines?.length ?? 0) - 1);
    return (
        <div className="flex min-w-0 flex-1 flex-col gap-2 py-1 md:flex-row md:items-center md:justify-between md:gap-2">
            <div className="flex min-w-0 flex-col gap-[6px]">
                <div className="flex min-w-0 flex-nowrap items-center text-xs text-muted-foreground">
                    {row.metaLines.map((line, i) => (
                        <div
                            key={`${i}-${line.label}`}
                            className="flex items-center"
                        >
                            {i > 0 ? (
                                <span
                                    className="shrink-0 text-muted-foreground inline-block w-[17px] text-center"
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
                                <span className="shrink-0 font-bold text-gray-6">
                                    {t(`character.labels.${line.label}`)}
                                </span>
                                <span className="shrink-0">
                                    {line.text.length > 10
                                        ? `${line.text.slice(0, 10)}...`
                                        : line.text}
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
            <div
                className="hidden shrink-0 items-center gap-0.5 md:flex"
                onClick={(e) => e.stopPropagation()}
            >
                {/* <Button
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
                </Button> */}
                <Button
                    type="button"
                    variant="ghost"
                    size="iconSm"
                    aria-label="보기"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/character-settings?id=${row.id}`;
                    }}
                >
                    <Icon name="eyeglasses" size={16} />
                </Button>
            </div>
            <div
                className="flex w-full flex-wrap items-center justify-between gap-x-1 gap-y-2 md:hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="p-0"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `/character-settings?id=${row.id}`;
                        }}
                    >
                        <Icon name="eyeglasses" size={16} />
                        보기
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                        <Gem className="size-4" />
                        수정
                    </Button>
                </div>

                <Button type="button" variant="ghost" size="sm">
                    <Icon name="balance" size={16} />
                    비교
                </Button>
            </div>
        </div>
    );
}

// 캐릭터 목록 탭 콘텐츠
function CharacterListContent() {
    const { t } = useTranslation("common");
    const [gridSorting, setGridSorting] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const scrollContainerRef = React.useRef(null);

    // 테이블 컬럼 정의 (번역 적용)
    const gridColumns = [
        {
            key: "id",
            header: t("character.tableHeaders.no"),
            width: "80px",
            sortAlign: "left",
            mobileClassName:
                "max-md:order-3 max-md:w-full max-md:justify-start max-md:pt-1",
        },
        {
            key: "role",
            header: t("character.tableHeaders.role"),
            width: "80px",
            mobileClassName:
                "max-md:order-1 max-md:w-[calc(50%-4px)] max-md:shrink-0 max-md:justify-start max-md:font-semibold",
        },
        {
            key: "status",
            header: t("character.tableHeaders.status"),
            width: "80px",
            headerAlign: "left",
            mobileClassName:
                "max-md:order-2 max-md:flex max-md:w-[calc(50%-4px)] max-md:shrink-0 max-md:justify-end max-md:text-sm max-md:text-muted-foreground",
        },
        {
            key: "title",
            header: t("character.tableHeaders.name"),
            width: "minmax(0, 1fr)",
            sortable: true,
            headerAlign: "left",
            mobileClassName: "max-md:order-4 max-md:w-full max-md:p-0",
        },
    ];

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
        // 스크롤 컨테이너를 상단으로 이동
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col md:h-full w-full max-w-[678px] mx-auto overflow-x-hidden">
            {/* 고정 헤더 영역 */}
            <div className="flex-shrink-0 w-full px-0 md:px-6 pt-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-gray-6">{gridRichRows.length} 개</div>
                    <div className="flex gap-2">
                        <Button
                            variant="oulinePoint1"
                            rounded="full"
                            size="sm"
                            className="gap-2 min-w-[100px] text-sm font-bold shadow-sm"
                        >
                            <Icon name="category_search" size={20} />
                            <span data-eng="Filter">상세 검색</span>
                        </Button>
                        <Button
                            variant="oulinePoint1"
                            rounded="full"
                            size="sm"
                            className="gap-2 min-w-[100px] hidden md:block text-sm font-bold shadow-sm  "
                        >
                            <Icon name="add" size={20} />
                            <span data-eng="Create">캐릭터 등록</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* 스크롤 가능한 콘텐츠 영역 */}
            <div
                ref={scrollContainerRef}
                className="flex-1 md:overflow-y-auto w-full"
            >
                <div className="w-full md:px-6 px-0 pb-6">
                    <TableGrid
                        columns={gridColumns}
                        striped
                        sortable
                        sorting={gridSorting}
                        onSortingChange={setGridSorting}
                    >
                        {paginatedRows.map((row) => (
                            <Link
                                href={`/character-settings?id=${row.id}`}
                                key={row.id}
                            >
                                <TableGridRow
                                    value={row.id}
                                    className="cursor-pointer hover:bg-gray-50 transition-colors rounded-none boder-1-red"
                                >
                                    <TableGridCell
                                        columnKey="id"
                                        className="text-muted-foreground tabular-nums max-md:hidden"
                                    >
                                        <span className="md:tabular-nums px-3">
                                            {row.id}
                                        </span>
                                    </TableGridCell>
                                    <TableGridCell
                                        columnKey="role"
                                        className="justify-center text-gray-6 font-light"
                                    >
                                        {t(`character.role.${row.role}`)}
                                    </TableGridCell>
                                    <TableGridCell
                                        columnKey="status"
                                        className="justify-center"
                                    >
                                        <div className="flex items-center gap-1 px-3 fz-12">
                                            {statusIconMap[row.status] && (
                                                <Icon
                                                    name={
                                                        statusIconMap[
                                                            row.status
                                                        ]
                                                    }
                                                    size={20}
                                                    className="md:hidden text-gray-6"
                                                />
                                            )}
                                            {t(
                                                `character.status.${row.status}`,
                                            )}
                                        </div>
                                    </TableGridCell>
                                    <TableGridCell
                                        columnKey="title"
                                        className="min-w-0 p-3"
                                    >
                                        <GridRichDetailCell row={row} />
                                    </TableGridCell>
                                </TableGridRow>
                            </Link>
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
            </div>
        </div>
    );
}

// 캐릭터 비교 탭 콘텐츠
function CharacterComparisonContent() {
    return (
        <div className="w-full max-w-[678px] mx-auto space-y-6">
            <p className="text-sm text-gray-500">Empty</p>
        </div>
    );
}

// 공통 설정 관리 탭 콘텐츠
function CommonSettingsContent() {
    return (
        <div className="w-full max-w-[678px] mx-auto space-y-6">
            <p className="text-sm text-gray-500">Empty</p>
        </div>
    );
}

export default function CharacterList() {
    const tabs = [
        {
            value: "settings",
            label: "캐릭터 설정",
            labelEng: "Character Settings",
            content: <CharacterListContent />,
        },
        {
            value: "comparison",
            label: "캐릭터 비교",
            labelEng: "Comparison",
            content: <CharacterComparisonContent />,
        },
        {
            value: "common",
            label: "공통 설정 관리",
            labelEng: "Common Management",
            content: <CommonSettingsContent />,
        },
    ];

    return (
        <CommonLayout
            title="인물 관리"
            description="작중 출연하는 캐릭터를 생성·관리 할 수 있습니다, 각 항목을 눌러 수정할 수 있으며 저장 버튼을 누르면 즉시 반영되니 참고하세요."
            titleEng="Characters"
            descriptionEng="You can create and manage the characters you appear in during the work, you can modify each item by pressing the save button, and it will be reflected immediately."
            showTabs={true}
            tabs={tabs}
            defaultTab="settings"
        />
    );
}
