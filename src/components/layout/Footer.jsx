"use client";

import * as React from "react";
import { Icon } from "@/components/ui/icon";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

export function Footer({ onExpandChange }) {
    const { t } = useTranslation("common");
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleToggle = () => {
        const newExpandedState = !isExpanded;
        setIsExpanded(newExpandedState);
        if (onExpandChange) {
            onExpandChange(newExpandedState);
        }
    };

    return (
        <>
            {/* PC 하단 플로팅 푸터 (본문과 겹침, 카드 위에 떠 있음) */}
            <footer className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 bg-gray-1 text-[14px] lg:pt-0 lg:items-center flex-col flex pb-[30px] lg:pb-0">
                <div className="pointer-events-auto lg:h-[60px] items-center flex mx-auto flex px-6 lg:px-5 pt-2 max-w-[1400px] m-auto text-gray-6 flex-col lg:flex-row gap-4 lg:gap-0 w-full">
                    <div className="flex gap-[15px] w-full lg:items-center lg:flex-row flex-col">
                        <div className="flex justify-between items-center gap-1 ">
                            {/* 사업자 정보 상세 보기 */}
                            <button
                                type="button"
                                className={cn(
                                    "flex items-center gap-1 transition-all cursor-pointer",
                                    isExpanded
                                        ? "text-point-1 font-medium"
                                        : "",
                                )}
                                onClick={handleToggle}
                            >
                                <Icon
                                    name="more"
                                    size={18}
                                    className={cn(
                                        "transition-transform duration-300",
                                        isExpanded
                                            ? "rotate-45 [&_svg]:fill-point-1 top-[0px] relative"
                                            : "",
                                    )}
                                />
                                {t("footer.businessInfo")}
                            </button>
                            <a href="#" className="block lg:hidden">
                                {t("footer.help")}
                            </a>
                        </div>
                        <div
                            className={cn(
                                "bg-gray-6 lg:w-full lg:absolute lg:-top-[60px] lg:left-0 lg:mx-0 -mx-6 w-auto",
                                isExpanded ? "block" : "hidden",
                            )}
                        >
                            <div className="max-w-[1400px] relative m-auto px-6 lg:px-5 py-3 text-white text-xs leading-relaxed ">
                                {/* 아래로 내려가 있는 삼각형 */}
                                <div
                                    className="absolute bottom-0 left-[100px] transform -translate-x-1/2 translate-y-full lg:block hidden"
                                    style={{
                                        width: 0,
                                        height: 0,
                                        borderLeft: "8px solid transparent",
                                        borderRight: "8px solid transparent",
                                        borderTop: "11px solid #474554",
                                    }}
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-wrap gap-x-10 gap-y-[5px] lg:flex-row flex-col">
                                        <span className="flex gap-2.5">
                                            <strong className="shrink-0">
                                                상호명
                                            </strong>{" "}
                                            유한회사 올음
                                        </span>
                                        <span className="flex gap-2.5">
                                            <strong className="shrink-0">
                                                대표
                                            </strong>{" "}
                                            한지인
                                        </span>
                                        <span className="flex gap-2.5">
                                            <strong className="shrink-0">
                                                사업자등록번호
                                            </strong>{" "}
                                            352-86-03561
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-x-10 gap-y-[5px] lg:flex-row flex-col">
                                        <span className="flex gap-2.5">
                                            <strong className="shrink-0">
                                                본사
                                            </strong>{" "}
                                            경기도 성남시 중원구 산성대로 106,
                                            <br className="lg:hidden" />
                                            성남동 A381호(성남동, 원천빌딩)
                                        </span>
                                        <span className="flex gap-2.5">
                                            <strong className="shrink-0">
                                                전화
                                            </strong>{" "}
                                            070-8019-3455
                                        </span>
                                        <span className="flex gap-2.5">
                                            <strong className="shrink-0">
                                                개인정보책임자
                                            </strong>{" "}
                                            한지인
                                        </span>
                                    </div>
                                </div>
                                <i
                                    className="absolute bottom-0 lg:right-6 right-0 w-[330px] lg:h-full h-[90px] bg-contain bg-no-repeat"
                                    style={{
                                        backgroundImage:
                                            "url(/footer_logo.svg)",
                                    }}
                                ></i>
                            </div>
                        </div>
                        <div className="flex gap-4 lg:inline-flex">
                            <a href="#" className=" transition-colors">
                                {t("footer.termsOfService")}
                            </a>
                            <a href="#" className=" transition-colors">
                                {t("footer.privacyPolicy")}
                            </a>
                        </div>

                        <span className="">
                            {t("footer.businessRegistration")}
                        </span>
                        <a href="#" className="hidden lg:block">
                            {t("footer.help")}
                        </a>
                    </div>

                    <div className="lg:ml-auto w-full lg:w-auto lg:shrink-0">
                        <span className=" transition-colors">
                            {t("footer.copyright")}
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
