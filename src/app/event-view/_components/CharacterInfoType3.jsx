"use client";
import { Icon } from "@/components/ui/icon";

/**
 * CharacterInfoType3 - 캐릭터 정보 컴포넌트 (좌측 영역용)
 */
export const CharacterInfoType3 = () => {
    return (
        <div className="w-full h-full overflow-hidden flex flex-col pt-[15px]">
            {/* 상세 셀 영역 */}
            <div className="h-full overflow-y-auto custom-scrollbar min-h-0">
                <div className="pb-[20px]">
                    <div className="bg-gray-6 min-h-[146px] flex flex-col gap-2 text-white pt-10 pb-[30px] pl-[30px] pr-[10px] w-[calc(100%-20px)] rounded-tl-[100px] rounded-tr-[40px] rounded-br-[100px] rounded-bl-[40px]">
                        <div className="fz-14 font-semibold">연재중 · 계약완료</div>
                        <div className="fz-18 font-semibold leading-[110%]">
                            일일일일일일일일일일이이이이이이이이이이삼삼삼삼삼삼삼삼삼삼
                        </div>
                    </div>
                    <div className="bg-gray-1 py-[30px] px-[15px] min-h-[120px] w-[calc(100%-30px)] ml-auto relative -top-5 rounded-tl-[6px] rounded-tr-[6px] rounded-br-[40px] rounded-bl-[6px]">
                        <div className="fz-14 text-gray-6">최소사이즈 예시</div>
                    </div>
                    <div
                        className="bg-[#47455433] min-h-[90px] ml-[10px] pb-5 pt-[30px] pl-[30px] w-[calc(100%-40px)] pr-[30px] relative -top-10"
                        style={{
                            borderTopLeftRadius: "1999px",
                            borderTopRightRadius: "9999px",
                            borderBottomRightRadius: "9999px",
                            borderBottomLeftRadius: "1999px",
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <Icon name="strikethrough_s" size={16} />
                            <span className="fz-14">1</span>
                        </div>
                    </div>
                    <div className="relative z-2 rounded-tl-[40px] rounded-tr-[6px] rounded-br-[40px] rounded-bl-[6px] bg-point-1 -top-15 w-[calc(100%-30px)] ml-auto">
                        <div className="flex flex-col text-center gap-[6px] py-[30px] text-white fz-18 leading-[100%]">
                            <span className="fz-14 font-semibold">
                                본문 주요 시간대
                            </span>
                            0000년 00월 00일
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-[10px] -top-20 -mb-20 w-[calc(100%-30px)] bg-gray-1 rounded-[6px] px-[48px] py-[50px] z-1">
                        <div className="flex justify-between items-center">
                            <span className="fz-12 text-[#8e8e8e]">
                                기준시간대
                            </span>
                            <strong className="fz-14 font-regular text-gray-6">
                                직접설정
                            </strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="fz-12 text-[#8e8e8e]">
                                1년 기준(일)
                            </span>
                            <strong className="fz-14 font-regular text-gray-6">
                                -
                            </strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="fz-12 text-[#8e8e8e]">
                                1개월 기준(일)
                            </span>
                            <strong className="fz-14 font-regular text-gray-6">
                                -
                            </strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="fz-12 text-[#8e8e8e]">
                                1일 기준(시간)
                            </span>
                            <strong className="fz-14 font-regular text-gray-6">
                                24 시간
                            </strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="fz-12 text-[#8e8e8e]">
                                1시간 기준 (분)
                            </span>
                            <strong className="fz-14 font-regular text-gray-6">
                                60 분
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
