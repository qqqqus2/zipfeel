"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  pageListData,
  getPagesByCategory,
  getPageStatusCounts,
} from "@/data/menuData";
import { Icon } from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// 상태별 색상
const getStatusColor = (status) => {
  switch (status) {
    case "완료":
      return "text-sub-8 bg-sub-8/10";
    case "진행중":
      return "text-point-2 bg-point-2/10";
    case "예정":
      return "text-gray-5 bg-gray-2";
    default:
      return "text-gray-5 bg-gray-2";
  }
};

// 전체 페이지 테이블 뷰
function AllPagesView() {
  const router = useRouter();

  const handleRowClick = (page) => {
    if (page.status === "완료" || page.status === "진행중") {
      router.push(page.path);
    }
  };

  return (
    <div className="rounded-lg border border-gray-3 bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">카테고리</TableHead>
            <TableHead>페이지명</TableHead>
            <TableHead>경로</TableHead>
            <TableHead className="w-[120px]">레이아웃</TableHead>
            <TableHead className="w-[80px]">상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pageListData.map((page) => {
            const isClickable = page.status === "완료" || page.status === "진행중";

            return (
              <TableRow
                key={page.id}
                className={isClickable ? "hover:bg-gray-1/50 cursor-pointer" : ""}
                onClick={() => handleRowClick(page)}
              >
                <TableCell className="font-medium text-sm text-gray-6">
                  {page.category}
                </TableCell>
                <TableCell>
                  <div>
                    {isClickable ? (
                      <Link
                        href={page.path}
                        className="font-medium text-point-2 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {page.title}
                      </Link>
                    ) : (
                      <div className="font-medium text-gray-6">
                        {page.title}
                      </div>
                    )}
                    <div className="text-sm text-gray-5 mt-1">
                      {page.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <code className="text-sm bg-gray-1 px-2 py-1 rounded text-point-1">
                    {page.path}
                  </code>
                </TableCell>
                <TableCell className="text-sm text-gray-5">
                  {page.layout}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(page.status)}`}
                  >
                    {page.status}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

// 카테고리별 카드 뷰
function CategoryView() {
  const pagesByCategory = getPagesByCategory();

  return (
    <div className="space-y-6">
      {Object.entries(pagesByCategory).map(([category, pages]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="folder" size={20} />
              {category}
              <span className="text-sm font-normal text-gray-5">
                ({pages.length}개)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {pages.map((page) => {
                const isClickable = page.status === "완료" || page.status === "진행중";

                if (isClickable) {
                  return (
                    <Link
                      key={page.id}
                      href={page.path}
                      className="flex items-start justify-between p-3 rounded-lg border border-gray-2 hover:border-point-2 hover:bg-gray-1/30 transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-point-2 hover:underline">
                            {page.title}
                          </h3>
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(page.status)}`}
                          >
                            {page.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-5 mb-2">
                          {page.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-5">
                          <code className="bg-gray-1 px-2 py-1 rounded text-point-1">
                            {page.path}
                          </code>
                          <span>Layout: {page.layout}</span>
                        </div>
                      </div>
                      <div className="ml-4 text-point-2 flex items-center gap-1 text-sm">
                        <Icon name="arrow_forward" size={16} />
                      </div>
                    </Link>
                  );
                }

                return (
                  <div
                    key={page.id}
                    className="flex items-start justify-between p-3 rounded-lg border border-gray-2 opacity-60"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-6">
                          {page.title}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(page.status)}`}
                        >
                          {page.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-5 mb-2">
                        {page.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-5">
                        <code className="bg-gray-1 px-2 py-1 rounded text-point-1">
                          {page.path}
                        </code>
                        <span>Layout: {page.layout}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// 통계 카드
function StatCards() {
  const statusCounts = getPageStatusCounts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold text-gray-6">
            {pageListData.length}
          </div>
          <p className="text-sm text-gray-5 mt-1">전체 페이지</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold text-sub-8">
            {statusCounts["완료"] || 0}
          </div>
          <p className="text-sm text-gray-5 mt-1">완료된 페이지</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold text-point-2">
            {statusCounts["진행중"] || 0}
          </div>
          <p className="text-sm text-gray-5 mt-1">진행중인 페이지</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold text-gray-5">
            {statusCounts["예정"] || 0}
          </div>
          <p className="text-sm text-gray-5 mt-1">예정된 페이지</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PageListPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-6 mb-2">
            페이지 목록
          </h1>
          <p className="text-gray-5">
            Zipfeel 프로젝트의 모든 페이지 및 개발 현황을 확인할 수 있습니다.
          </p>
        </div>
        <Link
          href="/main"
          className="text-sm font-medium text-point-2 flex items-center gap-1 hover:underline"
        >
          <Icon name="home" size={16} />
          홈으로
        </Link>
      </div>

      {/* 통계 카드 */}
      <StatCards />

      {/* 탭으로 뷰 전환 */}
      <Tabs defaultValue="all" variant="underline">
        <TabsList>
          <TabsTrigger value="all">전체 목록</TabsTrigger>
          <TabsTrigger value="category">카테고리별</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <AllPagesView />
        </TabsContent>
        <TabsContent value="category" className="mt-6">
          <CategoryView />
        </TabsContent>
      </Tabs>

      {/* 범례 */}
      <Card className="bg-gray-1/50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-sub-8"></span>
              <span className="text-gray-6">완료: 구현 완료된 페이지</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-point-2"></span>
              <span className="text-gray-6">진행중: 현재 개발 중인 페이지</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-4"></span>
              <span className="text-gray-6">예정: 개발 예정 페이지</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
