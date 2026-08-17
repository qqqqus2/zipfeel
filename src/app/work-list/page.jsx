"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

// 임시 데이터
const mockWorks = [
    {
        id: 1,
        title: "판타지 세계의 모험",
        genre: "판타지",
        status: "진행중",
        chapters: 15,
        lastUpdated: "2024-01-15",
    },
    {
        id: 2,
        title: "현대 로맨스",
        genre: "로맨스",
        status: "완결",
        chapters: 30,
        lastUpdated: "2024-01-10",
    },
    {
        id: 3,
        title: "SF 우주 탐험",
        genre: "SF",
        status: "구상중",
        chapters: 0,
        lastUpdated: "2024-01-05",
    },
];

const getStatusColor = (status) => {
    switch (status) {
        case "진행중":
            return "text-point-2 bg-point-2/10";
        case "완결":
            return "text-sub-8 bg-sub-8/10";
        case "구상중":
            return "text-gray-5 bg-gray-2";
        default:
            return "text-gray-5 bg-gray-2";
    }
};

export default function WorkList() {
    return (
        <CommonLayout
            title="작품 목록"
            description="나의 모든 작품을 한눈에 확인하고 관리하세요"
        >
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-6">
                            전체 작품 ({mockWorks.length})
                        </h2>
                        <p className="text-sm text-gray-5 mt-1">
                            작성중인 작품과 완결된 작품을 관리할 수 있습니다
                        </p>
                    </div>
                    <Link href="/work-settings/new">
                        <Button variant="point1" className="gap-2">
                            <Icon name="add" size={20} />
                            새 작품 만들기
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockWorks.map((work) => (
                        <Card
                            key={work.id}
                            className="hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <CardTitle className="text-base">
                                        {work.title}
                                    </CardTitle>
                                    <span
                                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(work.status)}`}
                                    >
                                        {work.status}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-5">
                                        <Icon name="category" size={16} />
                                        <span>{work.genre}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-5">
                                        <Icon name="library_books" size={16} />
                                        <span>{work.chapters}개 챕터</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-5">
                                        <Icon name="schedule" size={16} />
                                        <span>
                                            최근 수정:{" "}
                                            {new Date(
                                                work.lastUpdated,
                                            ).toLocaleDateString("ko-KR")}
                                        </span>
                                    </div>
                                    <div className="flex gap-2 pt-3 border-t border-gray-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1"
                                        >
                                            수정
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="point1"
                                            className="flex-1"
                                        >
                                            보기
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {mockWorks.length === 0 && (
                    <div className="text-center py-12">
                        <Icon
                            name="library_books"
                            size={48}
                            className="mx-auto text-gray-4 mb-4"
                        />
                        <p className="text-gray-5 mb-4">
                            아직 작성된 작품이 없습니다
                        </p>
                        <Link href="/work-settings/new">
                            <Button variant="point1">
                                첫 작품 만들기
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </CommonLayout>
    );
}
