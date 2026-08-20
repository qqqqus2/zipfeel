"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { Notice } from "./_components/Notice";
import { Faq } from "./_components/Faq";
import { Qna } from "./_components/Qna";

export default function CustomerCenterPage() {
    const tabs = [
        {
            value: "notice",
            label: "공지사항",
            labelEng: "Notice",
            content: <Notice />,
        },
        {
            value: "faq",
            label: "FAQ",
            labelEng: "FAQ",
            content: <Faq />,
        },
        {
            value: "inquiry",
            label: "1:1문의",
            labelEng: "1:1 Inquiry",
            content: <Qna />,
        },
    ];

    return (
        <MainLayout
            title="도움누리"
            description="집필 이용에 도움이 되는 정보로 1:1 문의는 로그인 후 이용할 수 있습니다."
            titleEng="Help Center"
            descriptionEng="Information to help you with your writing. 1:1 inquiries are available after logging in."
            showTabs={true}
            tabs={tabs}
            defaultTab="notice"
        />
    );
}
