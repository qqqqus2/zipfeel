import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import {
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    FieldGroup,
} from "./field";
import { Input } from "./input";
import { TextareaBox } from "./textarea";
import { Combobox } from "./combobox";
import { Checkbox } from "./checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";
import { Icon } from "./icon";
import {
    LayerPopup,
    LayerPopupContent,
    LayerPopupHeader,
    LayerPopupTitle,
    LayerPopupCloseButton,
    LayerPopupBody,
    LayerPopupFooter,
    LayerPopupTrigger,
    LayerPopupNotice,
    StepLayerPopupFooter,
} from "./layer-popup";

const SEARCH_OPEN_OPTIONS = [
    { value: "input", label: "입력" },
    { value: "1", label: "입력 항목1" },
    { value: "2", label: "입력 항목2" },
    { value: "3", label: "입력 항목3" },
    { value: "4", label: "입력 항목4" },
];

const HELP_TEXT_CLASSNAME = "flex items-center gap-1 text-gray-6 text-xs";

function FieldHelp({ children = "Helper Text" }) {
    return (
        <FieldDescription className={HELP_TEXT_CLASSNAME}>
            <Icon name="tooltip" size={20} />
            {children}
        </FieldDescription>
    );
}

const INITIAL_USAGE_CHECKBOX_ROWS = [
    { enabled: false, value: "" },
    { enabled: true, value: "" },
    { enabled: true, value: "" },
    { enabled: false, value: "" },
];

const INITIAL_USAGE_SELECT_ROWS = [
    { selected: "", value: "" },
    { selected: "value", value: "" },
    { selected: "value", value: "" },
];

const USAGE_HELP_TEXT_1 = "Help Text -1 : 사용 여부용은 Help Text 위치 두 개";
const USAGE_HELP_TEXT_2 = "Help Text -2 : 사용 여부용은 Help Text 위치 두 개";

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

export const Form = {
    render: () => {
        const FormPopupExample = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [isOpen2, setIsOpen2] = useState(false);
            const [currentStep, setCurrentStep] = useState(1);
            const [currentStep2, setCurrentStep2] = useState(1);
            const [scenarioType, setScenarioType] = useState("지문");
            const [target, setTarget] = useState("");
            const [content, setContent] = useState("");
            const [inputDefault, setInputDefault] = useState("");
            const [inputSearch, setInputSearch] = useState("");
            const [inputSearchOpen, setInputSearchOpen] = useState("");
            const [inputLeftLabel, setInputLeftLabel] = useState("");
            const [inputRightLabel41, setInputRightLabel41] = useState("");
            const [inputRightLabel42, setInputRightLabel42] = useState("");
            const [textareaDefault, setTextareaDefault] = useState("");
            const [textareaInner, setTextareaInner] = useState("");
            const [checkboxSingle, setCheckboxSingle] = useState([
                false,
                false,
                false,
                false,
            ]);
            const [checkboxMulti, setCheckboxMulti] = useState([
                false,
                false,
                false,
                false,
            ]);
            const [radioSingle, setRadioSingle] = useState("default-1");
            const [radioMulti, setRadioMulti] = useState("default-1");
            const [usageCheckboxRows, setUsageCheckboxRows] = useState(
                INITIAL_USAGE_CHECKBOX_ROWS,
            );
            const [usageSelectRows, setUsageSelectRows] = useState(
                INITIAL_USAGE_SELECT_ROWS,
            );
            const totalSteps = 10;
            const totalSteps2 = 10;
            const isDialogue = scenarioType === "대사";

            const resetForm = () => {
                setCurrentStep(1);
                setScenarioType("지문");
                setTarget("");
                setContent("");
            };

            const resetForm2 = () => {
                setCurrentStep2(1);
                setInputDefault("");
                setInputSearch("");
                setInputSearchOpen("");
                setInputLeftLabel("");
                setInputRightLabel41("");
                setInputRightLabel42("");
                setTextareaDefault("");
                setTextareaInner("");
                setCheckboxSingle([false, false, false, false]);
                setCheckboxMulti([false, false, false, false]);
                setRadioSingle("default-1");
                setRadioMulti("default-1");
                setUsageCheckboxRows(INITIAL_USAGE_CHECKBOX_ROWS);
                setUsageSelectRows(INITIAL_USAGE_SELECT_ROWS);
            };

            const handleCancel = () => {
                setIsOpen(false);
                resetForm();
            };

            const handleCancel2 = () => {
                setIsOpen2(false);
                resetForm2();
            };

            const handleNext = () => {
                if (currentStep < totalSteps) {
                    setCurrentStep(currentStep + 1);
                }
            };

            const handleNext2 = () => {
                if (currentStep2 < totalSteps2) {
                    setCurrentStep2(currentStep2 + 1);
                }
            };

            const handleSaveAndClose = () => {
                alert("저장되었습니다!");
                setIsOpen(false);
                resetForm();
            };

            const handleSaveAndClose2 = () => {
                alert("저장되었습니다!");
                setIsOpen2(false);
                resetForm2();
            };

            const helpTextClassName = HELP_TEXT_CLASSNAME;

            const updateCheckboxSingle = (index, checked) => {
                setCheckboxSingle((prev) =>
                    prev.map((item, i) => (i === index ? checked : item)),
                );
            };

            const updateCheckboxMulti = (index, checked) => {
                setCheckboxMulti((prev) =>
                    prev.map((item, i) => (i === index ? checked : item)),
                );
            };

            const updateUsageCheckboxRow = (index, patch) => {
                setUsageCheckboxRows((prev) =>
                    prev.map((row, i) =>
                        i === index ? { ...row, ...patch } : row,
                    ),
                );
            };

            const updateUsageSelectRow = (index, patch) => {
                setUsageSelectRows((prev) =>
                    prev.map((row, i) =>
                        i === index ? { ...row, ...patch } : row,
                    ),
                );
            };

            const fieldLabelWithTooltip = (
                <FieldLabel className="inline-flex items-center gap-1.5">
                    <span>항목명 ⓘ</span>
                </FieldLabel>
            );

            return (
                <>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(true)}
                        >
                            시나리오 삽입 팝업 열기
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen2(true)}
                        >
                            캐릭터 생성 팝업 열기
                        </Button>
                    </div>
                    <LayerPopup open={isOpen} onOpenChange={setIsOpen}>
                        <LayerPopupContent>
                            <LayerPopupHeader>
                                <LayerPopupTitle>시나리오 삽입</LayerPopupTitle>
                                <LayerPopupCloseButton />
                            </LayerPopupHeader>

                            <LayerPopupBody>
                                <LayerPopupNotice>
                                    <p>
                                        유형을 선택하면 유형에 맞는 입력 항목이
                                        노출됩니다.
                                    </p>
                                </LayerPopupNotice>
                                <FieldGroup className="mt-5 gap-[30px]">
                                    <Field className="gap-[6px]">
                                        <FieldLabel
                                            htmlFor="scenario-type-passage"
                                            required
                                        >
                                            유형 선택
                                        </FieldLabel>
                                        <FieldContent>
                                            <RadioGroup
                                                value={scenarioType}
                                                onValueChange={setScenarioType}
                                                className="flex gap-5"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value="지문"
                                                        id="scenario-type-passage"
                                                    />
                                                    <label
                                                        htmlFor="scenario-type-passage"
                                                        className="text-sm font-medium"
                                                    >
                                                        지문
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value="대사"
                                                        id="scenario-type-dialogue"
                                                    />
                                                    <label
                                                        htmlFor="scenario-type-dialogue"
                                                        className="text-sm font-medium"
                                                    >
                                                        대사
                                                    </label>
                                                </div>
                                            </RadioGroup>
                                        </FieldContent>
                                    </Field>

                                    {isDialogue ? (
                                        <Field className="gap-[6px]">
                                            <div className="flex w-full items-center justify-between gap-4">
                                                <FieldLabel
                                                    htmlFor="scenario-target"
                                                    required
                                                >
                                                    대상
                                                </FieldLabel>
                                                <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                    {target.length} / 30
                                                </span>
                                            </div>
                                            <FieldContent>
                                                <Input
                                                    id="scenario-target"
                                                    value={target}
                                                    onChange={(e) =>
                                                        setTarget(
                                                            e.target.value,
                                                        )
                                                    }
                                                    maxLength={30}
                                                    placeholder="입력하세요"
                                                    suffixButton={{
                                                        icon: "manage_search",
                                                        onClick: () => {},
                                                    }}
                                                />
                                                <div className="flex flex-col gap-[6px]">
                                                    <FieldDescription
                                                        className={
                                                            helpTextClassName
                                                        }
                                                    >
                                                        <Icon
                                                            name="tooltip"
                                                            size={20}
                                                        />
                                                        대사를 하는 대상을
                                                        입력하거나 입력 후
                                                        선택하세요.
                                                    </FieldDescription>
                                                    <FieldDescription
                                                        className={
                                                            helpTextClassName
                                                        }
                                                    >
                                                        <Icon
                                                            name="tooltip"
                                                            size={20}
                                                        />
                                                        입력 대상을 선택하지
                                                        않을 경우 데이터는
                                                        연동되지 않습니다.
                                                    </FieldDescription>
                                                </div>
                                            </FieldContent>
                                        </Field>
                                    ) : null}

                                    <Field className="gap-[6px]">
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <FieldLabel
                                                htmlFor="scenario-content"
                                                required
                                            >
                                                내용
                                            </FieldLabel>
                                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                {content.length} / 5000
                                            </span>
                                        </div>
                                        <FieldContent>
                                            <TextareaBox
                                                id="scenario-content"
                                                showLabel={false}
                                                showCount={false}
                                                value={content}
                                                onChange={(e) =>
                                                    setContent(e.target.value)
                                                }
                                                max={5000}
                                                placeholder="입력하세요"
                                                containerClassName="px-3 py-2"
                                            />
                                            <div className="flex flex-col gap-[6px]">
                                                <FieldDescription
                                                    className={
                                                        helpTextClassName
                                                    }
                                                >
                                                    <Icon
                                                        name="tooltip"
                                                        size={20}
                                                    />
                                                    지문 또는 대사에 들어갈
                                                    내용을 입력하세요.
                                                </FieldDescription>
                                                <FieldDescription
                                                    className={
                                                        helpTextClassName
                                                    }
                                                >
                                                    <Icon
                                                        name="tooltip"
                                                        size={20}
                                                    />
                                                    Enter를 통해 줄바꿈 할 수
                                                    있어요.
                                                </FieldDescription>
                                            </div>
                                        </FieldContent>
                                    </Field>
                                </FieldGroup>
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

                    <LayerPopup open={isOpen2} onOpenChange={setIsOpen2}>
                        <LayerPopupContent>
                            <LayerPopupHeader>
                                <LayerPopupTitle>캐릭터 생성</LayerPopupTitle>
                                <LayerPopupCloseButton />
                            </LayerPopupHeader>
                            <LayerPopupBody>
                                <LayerPopupNotice>
                                    <p>
                                        입력한 내용이 노출되며, 불필요 시 사용
                                        안함
                                    </p>
                                </LayerPopupNotice>
                                <FieldGroup className="mt-5 gap-[30px]">
                                    {/* 1_Input - Default */}
                                    <Field className="gap-[6px]">
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <FieldLabel
                                                htmlFor="char-input-default"
                                                required
                                            >
                                                1_Input - Default
                                            </FieldLabel>
                                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                {inputDefault.length} / 30
                                            </span>
                                        </div>
                                        <FieldContent>
                                            <Input
                                                id="char-input-default"
                                                value={inputDefault}
                                                onChange={(e) =>
                                                    setInputDefault(
                                                        e.target.value,
                                                    )
                                                }
                                                maxLength={30}
                                                placeholder="입력하세요"
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 2_Input - Search */}
                                    <Field className="gap-[6px]">
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <FieldLabel
                                                htmlFor="char-input-search"
                                                required
                                            >
                                                2_Input - Search
                                            </FieldLabel>
                                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                {inputSearch.length} / 30
                                            </span>
                                        </div>
                                        <FieldContent>
                                            <Input
                                                id="char-input-search"
                                                value={inputSearch}
                                                onChange={(e) =>
                                                    setInputSearch(
                                                        e.target.value,
                                                    )
                                                }
                                                maxLength={30}
                                                placeholder="입력하세요"
                                                suffixButton={{
                                                    icon: "manage_search",
                                                    onClick: () => {},
                                                }}
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 2-1_Input - Search(Open) */}
                                    <Field className="gap-[6px]">
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <FieldLabel
                                                htmlFor="char-input-search-open"
                                                required
                                            >
                                                2-1_Input - Search(Open)
                                            </FieldLabel>
                                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                {inputSearchOpen.length} / 30
                                            </span>
                                        </div>
                                        <FieldContent>
                                            <Combobox
                                                id="char-input-search-open"
                                                value={inputSearchOpen}
                                                onChange={(e) =>
                                                    setInputSearchOpen(
                                                        e.target.value,
                                                    )
                                                }
                                                maxLength={30}
                                                placeholder="입력하세요"
                                                options={SEARCH_OPEN_OPTIONS}
                                                onSelect={(opt) =>
                                                    setInputSearchOpen(
                                                        opt.label,
                                                    )
                                                }
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 3-1_Input - Left Label */}
                                    <Field className="gap-[6px]">
                                        <FieldContent>
                                            <Input
                                                id="char-input-left-label"
                                                value={inputLeftLabel}
                                                onChange={(e) =>
                                                    setInputLeftLabel(
                                                        e.target.value,
                                                    )
                                                }
                                                maxLength={30}
                                                placeholder="입력하세요"
                                                prefixLabel="3-1_Input - Left Lable"
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 4-1_Input - Right Label */}
                                    <Field className="gap-[6px]">
                                        <FieldContent>
                                            <Input
                                                id="char-input-right-label-41"
                                                value={inputRightLabel41}
                                                onChange={(e) =>
                                                    setInputRightLabel41(
                                                        e.target.value,
                                                    )
                                                }
                                                maxLength={30}
                                                placeholder="입력하세요"
                                                suffixLabel="4-1_Input - Right Lable"
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 4-2_Input - Right Label */}
                                    <Field className="gap-[6px]">
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <FieldLabel
                                                htmlFor="char-input-right-label-42"
                                                required
                                            >
                                                4-2_Input - Right Lable
                                            </FieldLabel>
                                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                {inputRightLabel42.length} / 10
                                            </span>
                                        </div>
                                        <FieldContent>
                                            <Input
                                                id="char-input-right-label-42"
                                                value={inputRightLabel42}
                                                onChange={(e) =>
                                                    setInputRightLabel42(
                                                        e.target.value,
                                                    )
                                                }
                                                maxLength={10}
                                                placeholder="입력하세요"
                                                suffixLabel="세부 항목명"
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 5_Text Area - Default */}
                                    <Field className="gap-[6px]">
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <FieldLabel
                                                htmlFor="char-textarea-default"
                                                required
                                            >
                                                5_Text Area - Default
                                            </FieldLabel>
                                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                {textareaDefault.length} / 10
                                            </span>
                                        </div>
                                        <FieldContent>
                                            <TextareaBox
                                                id="char-textarea-default"
                                                showLabel={false}
                                                showCount={false}
                                                value={textareaDefault}
                                                onChange={(e) =>
                                                    setTextareaDefault(
                                                        e.target.value,
                                                    )
                                                }
                                                max={10}
                                                placeholder="입력하세요"
                                                containerClassName="px-3 py-2"
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 6_Text Area - Inner Label */}
                                    <Field className="gap-[6px]">
                                        <FieldContent>
                                            <TextareaBox
                                                id="char-textarea-inner"
                                                label="6_Text Area - Inner Lable"
                                                value={textareaInner}
                                                onChange={(e) =>
                                                    setTextareaInner(
                                                        e.target.value,
                                                    )
                                                }
                                                max={5000}
                                                placeholder="입력하세요"
                                                containerClassName="px-3 py-2"
                                            />
                                            <FieldHelp />
                                        </FieldContent>
                                    </Field>

                                    {/* 7_Checkbox - Single Line */}
                                    <Field className="gap-[6px]">
                                        <FieldLabel required>
                                            7_Checkbox - Single Line
                                        </FieldLabel>
                                        <FieldContent>
                                            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                                                {checkboxSingle.map(
                                                    (checked, index) => (
                                                        <div
                                                            key={`char-cb-single-${index}`}
                                                            className="flex items-center space-x-2"
                                                        >
                                                            <Checkbox
                                                                id={`char-cb-single-${index}`}
                                                                checked={
                                                                    checked
                                                                }
                                                                onCheckedChange={(
                                                                    value,
                                                                ) =>
                                                                    updateCheckboxSingle(
                                                                        index,
                                                                        value ===
                                                                            true,
                                                                    )
                                                                }
                                                            />
                                                            <label
                                                                htmlFor={`char-cb-single-${index}`}
                                                                className="text-sm font-medium"
                                                            >
                                                                Default
                                                            </label>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                            <FieldHelp>Help Text</FieldHelp>
                                        </FieldContent>
                                    </Field>

                                    {/* 8_Checkbox - Multi Line */}
                                    <Field className="gap-[6px]">
                                        <FieldLabel required>
                                            8_Checkbox - Muli Line
                                        </FieldLabel>
                                        <FieldContent>
                                            <div className="flex flex-col gap-3">
                                                {checkboxMulti.map(
                                                    (checked, index) => (
                                                        <div
                                                            key={`char-cb-multi-${index}`}
                                                            className="flex items-center space-x-2"
                                                        >
                                                            <Checkbox
                                                                id={`char-cb-multi-${index}`}
                                                                checked={
                                                                    checked
                                                                }
                                                                onCheckedChange={(
                                                                    value,
                                                                ) =>
                                                                    updateCheckboxMulti(
                                                                        index,
                                                                        value ===
                                                                            true,
                                                                    )
                                                                }
                                                            />
                                                            <label
                                                                htmlFor={`char-cb-multi-${index}`}
                                                                className="text-sm font-medium"
                                                            >
                                                                Default
                                                            </label>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                            <FieldHelp>Help Text</FieldHelp>
                                        </FieldContent>
                                    </Field>

                                    {/* 9_Radio - Single Line */}
                                    <Field className="gap-[6px]">
                                        <FieldLabel required>
                                            9_Radio - Single Line
                                        </FieldLabel>
                                        <FieldContent>
                                            <RadioGroup
                                                value={radioSingle}
                                                onValueChange={setRadioSingle}
                                                className="flex gap-5"
                                            >
                                                {[1, 2, 3].map((num) => (
                                                    <div
                                                        key={`char-radio-single-${num}`}
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <RadioGroupItem
                                                            value={`default-${num}`}
                                                            id={`char-radio-single-${num}`}
                                                        />
                                                        <label
                                                            htmlFor={`char-radio-single-${num}`}
                                                            className="text-sm font-medium"
                                                        >
                                                            Default
                                                        </label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            <FieldHelp>Help Text</FieldHelp>
                                        </FieldContent>
                                    </Field>

                                    {/* 10_Radio - Multi Line */}
                                    <Field className="gap-[6px]">
                                        <FieldLabel required>
                                            10_Radio - Multi Line
                                        </FieldLabel>
                                        <FieldContent>
                                            <RadioGroup
                                                value={radioMulti}
                                                onValueChange={setRadioMulti}
                                                className="flex flex-col gap-3"
                                            >
                                                {[1, 2, 3].map((num) => (
                                                    <div
                                                        key={`char-radio-multi-${num}`}
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <RadioGroupItem
                                                            value={`default-${num}`}
                                                            id={`char-radio-multi-${num}`}
                                                        />
                                                        <label
                                                            htmlFor={`char-radio-multi-${num}`}
                                                            className="text-sm font-medium"
                                                        >
                                                            Default
                                                        </label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            <FieldHelp>Help Text</FieldHelp>
                                        </FieldContent>
                                    </Field>

                                    {/* Checkbox + Input (사용 여부) */}
                                    <Field className="gap-[6px]">
                                        {fieldLabelWithTooltip}
                                        <FieldContent>
                                            <FieldHelp>
                                                {USAGE_HELP_TEXT_1}
                                            </FieldHelp>
                                            <div className="flex flex-col gap-3">
                                                {usageCheckboxRows.map(
                                                    (row, index) => (
                                                        <div
                                                            key={`char-usage-cb-${index}`}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <div className="flex w-[120px] shrink-0 items-center space-x-2 sm:w-[140px]">
                                                                <Checkbox
                                                                    id={`char-usage-cb-${index}`}
                                                                    checked={
                                                                        row.enabled
                                                                    }
                                                                    onCheckedChange={(
                                                                        value,
                                                                    ) =>
                                                                        updateUsageCheckboxRow(
                                                                            index,
                                                                            {
                                                                                enabled:
                                                                                    value ===
                                                                                    true,
                                                                                value:
                                                                                    value ===
                                                                                    true
                                                                                        ? row.value
                                                                                        : "",
                                                                            },
                                                                        )
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor={`char-usage-cb-${index}`}
                                                                    className={cn(
                                                                        "text-sm font-medium",
                                                                        row.enabled
                                                                            ? "text-point-1"
                                                                            : "text-foreground",
                                                                    )}
                                                                >
                                                                    {row.enabled
                                                                        ? "Active"
                                                                        : "Default"}
                                                                </label>
                                                            </div>
                                                            <Input
                                                                className="min-w-0 flex-1"
                                                                value={
                                                                    row.value
                                                                }
                                                                onChange={(e) =>
                                                                    updateUsageCheckboxRow(
                                                                        index,
                                                                        {
                                                                            value: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    )
                                                                }
                                                                disabled={
                                                                    !row.enabled
                                                                }
                                                                placeholder={
                                                                    row.enabled
                                                                        ? "입력하세요"
                                                                        : "입력 불가"
                                                                }
                                                            />
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                            <FieldHelp>
                                                {USAGE_HELP_TEXT_2}
                                            </FieldHelp>
                                        </FieldContent>
                                    </Field>

                                    {/* Select + Input (사용 여부) */}
                                    <Field className="gap-[6px]">
                                        {fieldLabelWithTooltip}
                                        <FieldContent>
                                            <FieldHelp>
                                                {USAGE_HELP_TEXT_1}
                                            </FieldHelp>
                                            <div className="flex flex-col gap-3">
                                                {usageSelectRows.map(
                                                    (row, index) => {
                                                        const isActive =
                                                            Boolean(
                                                                row.selected,
                                                            );
                                                        return (
                                                            <div
                                                                key={`char-usage-select-${index}`}
                                                                className="flex items-center gap-2"
                                                            >
                                                                <Select
                                                                    value={
                                                                        row.selected ||
                                                                        undefined
                                                                    }
                                                                    onValueChange={(
                                                                        selected,
                                                                    ) =>
                                                                        updateUsageSelectRow(
                                                                            index,
                                                                            {
                                                                                selected,
                                                                                value: selected
                                                                                    ? row.value
                                                                                    : "",
                                                                            },
                                                                        )
                                                                    }
                                                                >
                                                                    <SelectTrigger
                                                                        className={cn(
                                                                            "h-10 w-[120px] shrink-0 sm:w-[140px]",
                                                                            isActive &&
                                                                                "border-point-1 focus:ring-point-1",
                                                                        )}
                                                                    >
                                                                        <SelectValue placeholder="선택하세요" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="value">
                                                                            값
                                                                        </SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <Input
                                                                    className="min-w-0 flex-1"
                                                                    value={
                                                                        row.value
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        updateUsageSelectRow(
                                                                            index,
                                                                            {
                                                                                value: e
                                                                                    .target
                                                                                    .value,
                                                                            },
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        !isActive
                                                                    }
                                                                    placeholder={
                                                                        isActive
                                                                            ? "입력하세요"
                                                                            : "입력 불가"
                                                                    }
                                                                />
                                                            </div>
                                                        );
                                                    },
                                                )}
                                            </div>
                                            <FieldHelp>
                                                {USAGE_HELP_TEXT_2}
                                            </FieldHelp>
                                        </FieldContent>
                                    </Field>
                                </FieldGroup>
                            </LayerPopupBody>
                            <StepLayerPopupFooter
                                currentStep={currentStep2}
                                totalSteps={totalSteps2}
                                onCancel={handleCancel2}
                                onNext={handleNext2}
                                onSaveAndClose={handleSaveAndClose2}
                            />
                        </LayerPopupContent>
                    </LayerPopup>
                </>
            );
        };
        return <FormPopupExample />;
    },
};
