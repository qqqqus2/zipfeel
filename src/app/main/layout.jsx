import { MainLayout } from "@/components/layout/MainLayout";

export default function MainPageLayout({ children }) {
    const tabs = [
        {
            value: "tab1",
            label: "Tab-1",
            labelEng: "Tab-1",
            content: children,
        },
        {
            value: "tab2",
            label: "Tab-2",
            labelEng: "Tab-2",
            content: <div>Tab 2 콘텐츠</div>,
        },
        {
            value: "tab3",
            label: "Tab-3",
            labelEng: "Tab-3",
            content: <div>Tab 3 콘텐츠</div>,
        },
    ];
    return (
        <MainLayout
            showTabs={true}
            tabs={tabs}
            defaultTab="tab1"
            title="메인 페이지"
            description="메인 페이지 설명"
        >
            {children}
        </MainLayout>
    );
}
