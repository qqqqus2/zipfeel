"use client";

import * as React from "react";
import {
    LayerPopup,
    LayerPopupContent,
    LayerPopupHeader,
    LayerPopupTitle,
    LayerPopupCloseButton,
} from "./layer-popup";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

/**
 * ContentsDetailPop - 컨텐츠 상세 정보 팝업
 *
 * Props:
 * - open: boolean - 팝업 열림 상태
 * - onOpenChange: (open: boolean) => void - 팝업 상태 변경 콜백
 * - type: "type1" | "type2" | "type3" - 레이아웃 타입 (default: "type2")
 * - title: string - 상단 카테고리 텍스트
 * - date: string - 날짜 텍스트
 * - heading: string - 메인 제목
 * - children: ReactNode - 컨텐츠 영역에 표시될 내용
 */
export const ContentsDetailPop = ({
    open,
    onOpenChange,
    type = "type2",
    title = "결제 및 취소(이용 요금)",
    date = "YYYY-MM-DD",
    heading = "일일일일일일일일일일이이이이이이이이이이삼삼삼삼삼삼삼삼삼삼사사사사사사사사사사오오오오오오오오오오육육육육육육육육육육칠칠칠칠칠칠칠칠칠칠팔팔팔팔팔팔팔팔팔팔구구구구구구구구구구십십십십십십십십십십",
    children,
}) => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const titleRef = React.useRef(null);

    const handleScroll = (e) => {
        // 타이틀 요소의 높이를 기준으로 약 50% 스크롤 시점 계산
        if (titleRef.current) {
            const titleHeight = titleRef.current.offsetHeight;
            const scrollThreshold = titleHeight * 0.2;
            setIsScrolled(e.target.scrollTop >= scrollThreshold);
        } else {
            // fallback: titleRef가 없으면 기존 로직 사용
            setIsScrolled(e.target.scrollTop >= 120);
        }
    };

    return (
        <LayerPopup open={open} onOpenChange={onOpenChange}>
            <LayerPopupContent>
                <LayerPopupHeader
                    variant="dark"
                    className="pb-[30px] transition-all duration-300"
                >
                    <LayerPopupTitle className="text-white ">
                        <div className="flex justify-between w-full pb-[5px] leading-[26px]">
                            <span className="fz-12 font-normal leading-5">
                                {title}
                            </span>
                            <span className="fz-12 font-normal flex items-center leading-5 gap-1">
                                {date}
                            </span>
                        </div>
                        <strong
                            ref={titleRef}
                            className={`fz-20 font-semibold leading-[1.2] transition-all duration-300 ${isScrolled ? "line-clamp-1" : "line-clamp-6"}`}
                        >
                            {heading}
                        </strong>
                    </LayerPopupTitle>
                    <LayerPopupCloseButton variant="dark" />
                </LayerPopupHeader>

                <ScrollArea
                    className="flex-1 overflow-y-auto bg-gray-1"
                    onScroll={handleScroll}
                >
                    {type === "type1" && (
                        <div className="px-6 py-5 bg-gray-2">{children}</div>
                    )}

                    {type === "type2" && (
                        <div className=" px-6 py-5">
                            <div className="px-6 py-5 bg-gray-2">
                                {children}
                            </div>
                        </div>
                    )}
                </ScrollArea>
                <div className="px-[30px] py-5 bg-gray-1 border-t border-point-1">
                    <div className="flex justify-between">
                        <Button
                            size="md"
                            variant="point1"
                            className="shadow-md min-w-15"
                        >
                            배포
                        </Button>
                        <div className="flex gap-2.5">
                            <Button
                                size="md"
                                variant="oulinePoint1"
                                className="shadow-md"
                            >
                                새로 수정
                            </Button>
                            <Button
                                size="md"
                                variant="oulinePoint1"
                                className="shadow-md"
                            >
                                수정
                            </Button>
                        </div>
                    </div>
                </div>
            </LayerPopupContent>
        </LayerPopup>
    );
};
