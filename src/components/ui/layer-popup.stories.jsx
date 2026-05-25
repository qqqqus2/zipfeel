import React, { useState } from "react";
import { Button } from "./button";
import {
    LayerPopup,
    LayerPopupContent,
    LayerPopupHeader,
    LayerPopupTitle,
    LayerPopupCloseButton,
    LayerPopupBody,
    LayerPopupFooter,
    LayerPopupTrigger,
    StepLayerPopupFooter,
} from "./layer-popup";

const LAYER_POPUP_DOC_PROPS = ["open", "onOpenChange", "defaultOpen", "modal"];

const meta = {
    title: "UI/LayerPopup",
    component: LayerPopup,
    parameters: {
        layout: "centered",
        controls: { include: LAYER_POPUP_DOC_PROPS },
        docs: {
            description: {
                component: `### LayerPopup 컴포넌트

모바일 친화적인 레이어 팝업 컴포넌트입니다.

**주요 특징:**
- max-width: 390px
- border-radius: 40px
- height: calc(100vh - 100px), max-height: 500px
- 고정 헤더 (타이틀 + 닫기 버튼)
- 스크롤 가능한 컨텐츠 영역
- 선택적 하단 푸터

**주요 props:**
- **open** — 제어 모드에서 열림 여부
- **defaultOpen** — 비제어 모드 초기 열림
- **onOpenChange** — 열림 상태 변경 시 콜백
- **modal** — true면 모달 동작 (포커스 트랩, 배경 스크롤 차단)`,
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        open: { control: "boolean", description: "제어: 열림 여부" },
        defaultOpen: { control: "boolean", description: "비제어: 초기 열림" },
        onOpenChange: {
            control: false,
            description: "열림 상태 변경 시 콜백",
        },
        modal: {
            control: "boolean",
            description: "true면 모달(포커스 트랩·외부 스크롤 차단)",
        },
    },
};

export default meta;

/**
 * 기본 레이어 팝업
 */
export const Default = {
    render: () => (
        <LayerPopup>
            <LayerPopupTrigger asChild>
                <Button variant="outline">팝업 열기</Button>
            </LayerPopupTrigger>
            <LayerPopupContent>
                <LayerPopupHeader>
                    <LayerPopupTitle>팝업 타이틀</LayerPopupTitle>
                    <LayerPopupCloseButton />
                </LayerPopupHeader>

                <LayerPopupBody>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-5">
                            이것은 기본 레이어 팝업 예시입니다.
                        </p>
                        <p className="text-sm text-gray-5">
                            스크롤 가능한 컨텐츠 영역을 테스트하기 위한 더미
                            텍스트입니다.
                        </p>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <p key={i} className="text-sm text-gray-5">
                                스크롤 테스트 항목 {i + 1}
                            </p>
                        ))}
                    </div>
                </LayerPopupBody>

                <LayerPopupFooter>
                    <Button variant="oulinePoint1">취소</Button>
                    <Button variant="point1">확인</Button>
                </LayerPopupFooter>
            </LayerPopupContent>
        </LayerPopup>
    ),
};

/**
 * 푸터가 없는 레이어 팝업
 */
export const WithoutFooter = {
    render: () => (
        <LayerPopup>
            <LayerPopupTrigger asChild>
                <Button variant="outline">푸터 없는 팝업</Button>
            </LayerPopupTrigger>
            <LayerPopupContent>
                <LayerPopupHeader>
                    <LayerPopupTitle>알림</LayerPopupTitle>
                    <LayerPopupCloseButton />
                </LayerPopupHeader>

                <LayerPopupBody>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-5">
                            이 팝업은 하단 푸터가 없습니다.
                        </p>
                        <p className="text-sm text-gray-5">
                            닫기 버튼으로만 닫을 수 있습니다.
                        </p>
                    </div>
                </LayerPopupBody>
            </LayerPopupContent>
        </LayerPopup>
    ),
};

/**
 * 단계별 네비게이션 팝업
 */
export const StepNavigation = {
    render: () => {
        const StepPopupExample = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [currentStep, setCurrentStep] = useState(1);
            const totalSteps = 10;

            const handleCancel = () => {
                setIsOpen(false);
                setCurrentStep(1);
            };

            const handleNext = () => {
                if (currentStep < totalSteps) {
                    setCurrentStep(currentStep + 1);
                }
            };

            const handleSaveAndClose = () => {
                alert("저장되었습니다!");
                setIsOpen(false);
                setCurrentStep(1);
            };

            return (
                <>
                    <Button variant="outline" onClick={() => setIsOpen(true)}>
                        단계별 팝업 열기
                    </Button>

                    <LayerPopup open={isOpen} onOpenChange={setIsOpen}>
                        <LayerPopupContent>
                            <LayerPopupHeader>
                                <LayerPopupTitle>
                                    작품 설정 ({currentStep}/{totalSteps})
                                </LayerPopupTitle>
                                <LayerPopupCloseButton />
                            </LayerPopupHeader>

                            <LayerPopupBody>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold text-gray-6">
                                        단계 {currentStep}
                                    </h3>
                                    <p className="text-sm text-gray-5">
                                        현재 {currentStep}번째 단계입니다.
                                    </p>
                                    <p className="text-sm text-gray-5">
                                        {currentStep === totalSteps
                                            ? "마지막 단계입니다. '저장 후 닫기'를 클릭하세요."
                                            : "'다음'을 클릭하여 다음 단계로 이동하세요."}
                                    </p>

                                    {/* 스크롤 테스트용 더미 컨텐츠 */}
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="p-3 bg-gray-1 rounded-lg"
                                        >
                                            <p className="text-sm text-gray-6">
                                                입력 필드 {i + 1}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </LayerPopupBody>

                            <StepLayerPopupFooter
                                currentStep={currentStep}
                                totalSteps={totalSteps}
                                onCancel={handleCancel}
                                onNext={handleNext}
                                onSaveAndClose={handleSaveAndClose}
                            />
                        </LayerPopupContent>
                    </LayerPopup>
                </>
            );
        };

        return <StepPopupExample />;
    },
};

/**
 * 약관 동의 팝업 예시
 */
export const TermsAgreement = {
    render: () => {
        const TermsPopupExample = () => {
            const [isOpen, setIsOpen] = useState(false);

            const handleAgree = () => {
                alert("동의하였습니다!");
                setIsOpen(false);
            };

            const handleDecline = () => {
                setIsOpen(false);
            };

            return (
                <>
                    <Button variant="outline" onClick={() => setIsOpen(true)}>
                        약관 보기
                    </Button>

                    <LayerPopup open={isOpen} onOpenChange={setIsOpen}>
                        <LayerPopupContent>
                            <LayerPopupHeader>
                                <LayerPopupTitle>회원가입 약관</LayerPopupTitle>
                                <LayerPopupCloseButton />
                            </LayerPopupHeader>

                            <LayerPopupBody>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h3 className="font-bold text-gray-6 mb-2">
                                            제1조 (목적)
                                        </h3>
                                        <p className="text-sm text-gray-5 leading-relaxed">
                                            본 약관은 회사가 제공하는 서비스의
                                            이용과 관련하여 회사와 회원 간의
                                            권리, 의무 및 책임사항을 규정함을
                                            목적으로 합니다.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-6 mb-2">
                                            제2조 (회원가입)
                                        </h3>
                                        <p className="text-sm text-gray-5 leading-relaxed">
                                            회원가입은 신청자가 온라인으로
                                            회사가 제공하는 소정의 가입신청
                                            양식에서 요구하는 사항을 기록하여
                                            가입을 완료하는 것으로 성립됩니다.
                                        </p>
                                    </div>

                                    <div className="p-3 bg-point-2/10 rounded-lg border border-point-2">
                                        <p className="text-xs text-gray-6">
                                            ※ 본 약관에 동의하지 않으실 경우
                                            회원가입이 불가능합니다.
                                        </p>
                                    </div>
                                </div>
                            </LayerPopupBody>

                            <LayerPopupFooter>
                                <Button
                                    variant="outline"
                                    onClick={handleDecline}
                                >
                                    동의 안 함
                                </Button>
                                <Button variant="point1" onClick={handleAgree}>
                                    동의함
                                </Button>
                            </LayerPopupFooter>
                        </LayerPopupContent>
                    </LayerPopup>
                </>
            );
        };

        return <TermsPopupExample />;
    },
};
