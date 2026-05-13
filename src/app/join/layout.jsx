import { MainLayout } from "@/components/layout/MainLayout";

export default function JoinLayout({ children }) {
    return (
        <MainLayout
            title="회원 가입"
            description={
                <>
                    설정 오류를 줄이는 작가들의 창작 곳간, <strong>집필</strong>
                    에 오신 것을 환영합니다.
                </>
            }
        >
            {children}
        </MainLayout>
    );
}
