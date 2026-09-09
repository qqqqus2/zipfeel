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

/**
 * ContentsDetailPop - 컨텐츠 상세 정보 팝업
 *
 * Props:
 * - open: boolean - 팝업 열림 상태
 * - onOpenChange: (open: boolean) => void - 팝업 상태 변경 콜백
 * - characterData: object - 캐릭터 데이터 (optional)
 */
export const ContentsDetailPop = ({ open, onOpenChange }) => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    const handleScroll = (e) => {
        setIsScrolled(e.target.scrollTop >= 120);
    };

    return (
        <LayerPopup open={open} onOpenChange={onOpenChange}>
            <LayerPopupContent>
                <LayerPopupHeader variant="dark" className="pb-[30px] transition-all duration-300">
                    <LayerPopupTitle className="text-white ">
                        <div className="flex justify-between w-full pb-[5px] leading-[26px]">
                            <span className="fz-12 font-normal leading-5">
                                결제 및 취소(이용 요금)
                            </span>
                            <span className="fz-12 font-normal flex items-center leading-5 gap-1">
                                YYYY-MM-DD
                            </span>
                        </div>
                        <strong
                            className={`fz-20 font-semibold leading-[1.2] transition-all duration-300 ${isScrolled ? "line-clamp-1" : "line-clamp-6"}`}
                        >
                            일일일일일일일일일일이이이이이이이이이이삼삼삼삼삼삼삼삼삼삼사사사사사사사사사사오오오오오오오오오오육육육육육육육육육육칠칠칠칠칠칠칠칠칠칠팔팔팔팔팔팔팔팔팔팔구구구구구구구구구구십십십십십십십십십십
                        </strong>
                    </LayerPopupTitle>
                    <LayerPopupCloseButton variant="dark" />
                </LayerPopupHeader>

                <ScrollArea
                    className="flex-1 overflow-y-auto"
                    onScroll={handleScroll}
                >
                    <div className="px-6 py-5">
                        <div className={`transition-all duration-300 ${isScrolled ? "-my-5 -mx-6" : ""}`}>
                            <div
                                className="bg-[#D9D9D9]"
                                style={{ height: "800px" }}
                            >
                                Contents Area Admin Written with Tiptap Editor
                                Full Scroll!!!!!!
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </LayerPopupContent>
        </LayerPopup>
    );
};
