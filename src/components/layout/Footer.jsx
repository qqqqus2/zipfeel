"use client";

import * as React from "react";
import { Icon } from "@/components/ui/icon";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
    const { t } = useTranslation("common");

    return (
        <>
            {/* PC 하단 플로팅 푸터 (본문과 겹침, 카드 위에 떠 있음) */}
            <footer className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 bg-gray-1 text-[14px] lg:pt-0 lg:h-[60px] lg:items-center flex pb-[30px] lg:pb-0">
                <div className="pointer-events-auto mx-auto flex px-6 lg:px-5  pt-2 max-w-[1400px] m-auto text-gray-6 flex-col lg:flex-row gap-4 lg:gap-0 w-full">
                    <div className="flex gap-[15px]  lg:flex-row flex-col">
                        <div className="flex justify-between items-center gap-1 ">
                            <a
                                href="#"
                                className="flex items-center gap-1  transition-colors"
                            >
                                <Icon name="more" size={18} />
                                {t("footer.businessInfo")}
                            </a>
                            <a href="#" className="block lg:hidden">
                                {t("footer.help")}
                            </a>
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

                    <div className="lg:ml-auto">
                        <span className=" transition-colors">
                            {t("footer.copyright")}
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
