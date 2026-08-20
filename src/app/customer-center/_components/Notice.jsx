"use client";

import { Icon } from "@/components/ui/icon";

// Mock 데이터
const mockNoticeData = [
    {
        id: 1,
        category: "이벤트",
        title: "신규 기능 업데이트 안내",
        date: "2026-08-10",
        isFirst: true,
    },
    {
        id: 2,
        category: "공지사항",
        title: "서버 점검 안내 (2026년 8월 15일)",
        date: "2026-08-09",
        isFirst: true,
    },
    {
        id: 3,
        category: "이벤트",
        title: "여름 맞이 특별 이벤트 진행",
        date: "2026-08-08",
        isFirst: false,
    },
    {
        id: 4,
        category: "공지사항",
        title: "개인정보 처리방침 변경 안내",
        date: "2026-08-07",
        isFirst: false,
    },
    {
        id: 5,
        category: "이벤트",
        title: "집필 콘테스트 개최 안내",
        date: "2026-08-05",
        isFirst: false,
    },
];

// NoticeItem 컴포넌트
const NoticeItem = ({ category, title, date, isFirst }) => {
    const isEvent = category === "이벤트";
    const categoryColor =
        isFirst && isEvent
            ? "text-point-2"
            : isFirst
              ? "text-sub-1"
              : "text-gray-6";
    const iconName =
        isFirst && isEvent
            ? "family_star_2"
            : isFirst
              ? "emoji_objects_red"
              : null;

    return (
        <div className="flex flex-col gap-[5px] p-[15px] border border-[rgba(71,69,84,0.6)] rounded-[10px] w-full md:w-[calc(50%-5px)]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <strong
                        className={`text-[12px] font-semibold ${categoryColor}`}
                    >
                        {category}
                    </strong>
                    {isFirst && iconName && <Icon name={iconName} size={14} />}
                </div>
                <span className="text-[14px] text-point-3">{date}</span>
            </div>
            <div className="text-[16px] text-gray-6 font-semibold">{title}</div>
        </div>
    );
};

/**
 * 공지사항
 */
export const Notice = () => {
    return (
        <div className="p-5 flex flex-col gap-[30px]">
            <div>Event Banner</div>
            <div className="text-[14px] text-gray-6 font-regular">
                {mockNoticeData.length}개
            </div>
            <div className="flex flex-wrap gap-[10px]">
                {mockNoticeData.map((notice) => (
                    <NoticeItem
                        key={notice.id}
                        category={notice.category}
                        title={notice.title}
                        date={notice.date}
                        isFirst={notice.isFirst}
                    />
                ))}
            </div>
        </div>
    );
};
