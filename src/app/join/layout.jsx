"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function JoinLayout({ children }) {
    const { language } = useLanguage();

    return (
        <MainLayout
            title="회원 가입"
            titleEng="Sign Up"
            description={
                language === "en" ? (
                    <>
                        Welcome to <strong>Zipfeel</strong>, a creative workspace for writers to reduce setting errors.
                    </>
                ) : (
                    <>
                        설정 오류를 줄이는 작가들의 창작 곳간, <strong>집필</strong>
                        에 오신 것을 환영합니다.
                    </>
                )
            }
        >
            {children}
        </MainLayout>
    );
}
