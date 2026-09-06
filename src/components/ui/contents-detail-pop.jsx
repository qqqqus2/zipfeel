"use client";

import {
    LayerPopup,
    LayerPopupContent,
    LayerPopupHeader,
    LayerPopupTitle,
    LayerPopupCloseButton,
    LayerPopupBody,
} from "./layer-popup";

/**
 * ContentsDetailPop - 컨텐츠 상세 정보 팝업
 *
 * Props:
 * - open: boolean - 팝업 열림 상태
 * - onOpenChange: (open: boolean) => void - 팝업 상태 변경 콜백
 * - characterData: object - 캐릭터 데이터 (optional)
 */
export const ContentsDetailPop = ({ open, onOpenChange }) => {
    return (
        <LayerPopup open={open} onOpenChange={onOpenChange}>
            <LayerPopupContent>
                <LayerPopupHeader variant="dark" className="pb-[30px]">
                    <LayerPopupTitle className="text-white ">
                        <div className="flex justify-between w-full pb-[5px] leading-[26px]">
                            <span className="fz-12 font-normal leading-5">
                                결제 및 취소(이용 요금)
                            </span>
                            <span className="fz-12 font-normal flex items-center leading-5 gap-1">
                                YYYY-MM-DD
                            </span>
                        </div>
                        <strong className="fz-20 font-semibold line-clamp-2 leading-[1.2]">
                            일일일일일일일일일일이이이이이이이
                            일일일일일일일일일일이이이이이이이
                        </strong>
                    </LayerPopupTitle>
                    <LayerPopupCloseButton variant="dark" />
                </LayerPopupHeader>

                <LayerPopupBody>
                    <div className="w-full"></div>
                </LayerPopupBody>
            </LayerPopupContent>
        </LayerPopup>
    );
};
