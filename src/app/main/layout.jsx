import { MainLayout } from "@/components/layout/MainLayout";

export default function MainPageLayout({ children }) {
    const tabs = [
        {
            value: "tab1",
            label: "Tab-1",
            labelEng: "Tab-1",
            content: <div></div>,
        },
        {
            value: "tab2",
            label: "Tab-2",
            labelEng: "Tab-2",
            content: <div></div>,
        },
        {
            value: "tab3",
            label: "Tab-3",
            labelEng: "Tab-3",
            content: <div></div>,
        },
    ];
    return (
        <MainLayout showTabs={true} tabs={tabs} defaultTab="tab1">
            {children}
        </MainLayout>
    );
}
