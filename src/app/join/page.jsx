"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonWrap } from "@/components/ui/button-wrap";
import {
    Field,
    FieldContent,
    FieldMessage,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InfoMessage } from "@/components/ui/info-message";
import { Checkbox } from "@/components/ui/checkbox";
import {
    LayerPopup,
    LayerPopupContent,
    LayerPopupHeader,
    LayerPopupTitle,
    LayerPopupCloseButton,
    LayerPopupBody,
    LayerPopupFooter,
    LayerPopupNotice,
} from "@/components/ui/layer-popup";
import {
    VALIDATION_MESSAGES,
    VALIDATION_RULES,
    PLACEHOLDERS,
    LABELS,
    BUTTONS,
} from "@/constants/joinValidation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function Join() {
    const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
    const [isMarketingPopupOpen, setIsMarketingPopupOpen] = useState(false);
    const [isTermsPopupOpen, setIsTermsPopupOpen] = useState(true); // 자동으로 열림
    const [selectedDomain, setSelectedDomain] = useState("");
    const [isMarketingConsent, setIsMarketingConsent] = useState(false);

    // 자주 사용되는 이메일 도메인 목록
    const emailDomains = [
        "gmail.com",
        "naver.com",
        "daum.net",
        "kakao.com",
        "hanmail.net",
        "outlook.com",
        "yahoo.com",
        "nate.com",
        "hotmail.com",
    ];

    const handleDuplicateCheck = () => {
        // TODO: 아이디 중복 확인 API 호출
        console.log("아이디 중복 확인");
    };

    const handlePenNameDuplicateSearch = () => {
        // TODO: 필명 중복 조회 API 호출
        console.log("필명 중복 조회");
    };

    const handleEmailDomainSelect = () => {
        setIsEmailPopupOpen(true);
    };

    const handleDomainSelect = (domain) => {
        setSelectedDomain(domain);
        setIsEmailPopupOpen(false);
    };

    const handleEmailDomainChange = (e) => {
        setSelectedDomain(e.target.value);
    };

    const handleMarketingCheckboxClick = (e) => {
        // 체크박스 기본 동작 방지
        e.preventDefault();
        // 팝업 열기
        setIsMarketingPopupOpen(true);
    };

    const handleMarketingConsent = () => {
        // 동의 후 체크박스 체크
        setIsMarketingConsent(true);
        setIsMarketingPopupOpen(false);
    };

    const handleMarketingDecline = () => {
        // 거부 시 체크박스 해제
        setIsMarketingConsent(false);
        setIsMarketingPopupOpen(false);
    };

    const handleTermsConsent = () => {
        // 동의 후 팝업 닫기
        setIsTermsPopupOpen(false);
    };

    const handleTermsDecline = () => {
        // 거부 시 이전 페이지로 이동 또는 팝업 유지
        // TODO: 약관 거부 시 동작 구현 (예: 이전 페이지로 이동)
        alert("회원가입을 진행하려면 약관에 동의해야 합니다.");
    };

    const handleCancel = () => {
        // TODO: 취소 동작 구현
        console.log("취소");
    };

    const handleSubmit = () => {
        // TODO: 휴대폰 인증 및 가입 완료 프로세스
        console.log("휴대폰 인증 후 가입 완료");
    };

    return (
        <div className="pt-9 md:pt-[42px] max-w-[330px] mx-auto">
            <div className="flex flex-col gap-[30px]">
                {/* 아이디 그룹 */}
                <Field>
                    <div className="flex gap-1 items-center justify-between w-full">
                        <FieldLabel htmlFor="field-id" required={true}>
                            {LABELS.id}
                        </FieldLabel>
                        <Button
                            size="xs"
                            variant="point1"
                            rounded="full"
                            className="shadow-md"
                            onClick={handleDuplicateCheck}
                        >
                            {BUTTONS.duplicateCheck}
                        </Button>
                    </div>
                    <FieldContent>
                        <Input
                            id="field-id"
                            type="text"
                            placeholder={PLACEHOLDERS.id}
                        />
                        <FieldMessage type="success">
                            {VALIDATION_MESSAGES.id.success}
                        </FieldMessage>
                        <FieldMessage type="error">
                            {VALIDATION_MESSAGES.id.error}
                        </FieldMessage>
                    </FieldContent>
                    <FieldContent>
                        <div className="flex flex-col gap-[6px]">
                            <InfoMessage
                                title={VALIDATION_RULES.id.title}
                                items={VALIDATION_RULES.id.items}
                            />
                            <InfoMessage
                                title={VALIDATION_RULES.idDuplicate.title}
                                items={VALIDATION_RULES.idDuplicate.items}
                            />
                        </div>
                    </FieldContent>
                </Field>

                {/* 비밀번호 그룹 */}
                <Field>
                    <div className="flex gap-1 items-center justify-between w-full">
                        <FieldLabel htmlFor="field-password" required={true}>
                            {LABELS.password}
                        </FieldLabel>
                    </div>
                    <FieldContent>
                        <Input
                            id="field-password"
                            type="password"
                            aria-invalid={false}
                            placeholder={PLACEHOLDERS.password}
                        />
                        <Input
                            id="field-password-confirm"
                            type="password"
                            aria-invalid={false}
                            placeholder={PLACEHOLDERS.passwordConfirm}
                        />
                        <FieldMessage type="error">
                            {VALIDATION_MESSAGES.password.error}
                        </FieldMessage>
                    </FieldContent>
                    <FieldContent>
                        <div className="flex flex-col gap-[6px]">
                            {VALIDATION_RULES.password.rules.map(
                                (rule, index) => (
                                    <InfoMessage
                                        key={index}
                                        title={rule.title}
                                    />
                                ),
                            )}
                        </div>
                    </FieldContent>
                </Field>

                {/* 필명 그룹 */}
                <Field>
                    <div className="flex gap-1 items-center justify-between w-full">
                        <FieldLabel htmlFor="field-pen-name" required={true}>
                            {LABELS.penName}
                        </FieldLabel>
                        <Button
                            size="xs"
                            variant="point1"
                            rounded="full"
                            className="shadow-md"
                            onClick={handlePenNameDuplicateSearch}
                        >
                            {BUTTONS.duplicateSearch}
                        </Button>
                    </div>
                    <FieldContent>
                        <Input
                            id="field-pen-name"
                            type="text"
                            placeholder={PLACEHOLDERS.penName}
                        />
                    </FieldContent>
                    <FieldMessage type="duplicate">
                        {VALIDATION_MESSAGES.penName.duplicate}
                    </FieldMessage>
                    <FieldContent>
                        <div className="flex flex-col gap-[6px]">
                            <InfoMessage
                                title={VALIDATION_RULES.penName.title}
                                items={VALIDATION_RULES.penName.items}
                            />
                            <InfoMessage
                                title={VALIDATION_RULES.penNameDuplicate.title}
                                items={VALIDATION_RULES.penNameDuplicate.items}
                            />
                        </div>
                    </FieldContent>
                </Field>

                {/* 이메일 그룹 */}
                <Field>
                    <div className="flex gap-1 items-center justify-between w-full">
                        <FieldLabel htmlFor="field-email-local" required={true}>
                            {LABELS.email}
                        </FieldLabel>
                    </div>
                    <FieldContent>
                        <Input
                            id="field-email-local"
                            type="text"
                            placeholder={PLACEHOLDERS.emailLocal}
                        />
                        <Input
                            id="field-email-domain"
                            type="text"
                            value={selectedDomain}
                            onChange={handleEmailDomainChange}
                            placeholder={PLACEHOLDERS.emailDomain}
                            prefixLabel="@"
                            suffixButton={{
                                icon: "manage_search",
                                onClick: handleEmailDomainSelect,
                            }}
                        />
                    </FieldContent>

                    {/* 마케팅 메일 수신 동의 */}
                    <FieldContent>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="marketing-consent"
                                checked={isMarketingConsent}
                                onClick={handleMarketingCheckboxClick}
                            />
                            <label
                                htmlFor="marketing-consent"
                                className="text-md font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                onClick={handleMarketingCheckboxClick}
                            >
                                {LABELS.marketingConsent}
                            </label>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <InfoMessage title={VALIDATION_RULES.email.title} />
                        </div>
                    </FieldContent>
                </Field>

                {/* 버튼 그룹 */}
                <ButtonWrap className="md:mt-[10px] mt-15">
                    <Button
                        size="lg"
                        variant="oulinePoint1"
                        className="w-[100px] shrink-0"
                        onClick={handleCancel}
                    >
                        {BUTTONS.cancel}
                    </Button>
                    <Button
                        size="lg"
                        className="flex-1"
                        variant="point1"
                        onClick={handleSubmit}
                    >
                        {BUTTONS.submit}
                    </Button>
                </ButtonWrap>
            </div>

            {/* 이메일 도메인 선택 레이어 팝업 */}
            <LayerPopup
                open={isEmailPopupOpen}
                onOpenChange={setIsEmailPopupOpen}
            >
                <LayerPopupContent>
                    <LayerPopupHeader>
                        <LayerPopupTitle>이메일 도메인 선택</LayerPopupTitle>
                        <LayerPopupCloseButton />
                    </LayerPopupHeader>

                    <LayerPopupBody>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-gray-5 mb-2">
                                자주 사용하는 이메일 도메인을 선택하세요.
                            </p>
                            {emailDomains.map((domain) => (
                                <button
                                    key={domain}
                                    onClick={() => handleDomainSelect(domain)}
                                    className={cn(
                                        "w-full px-4 py-3 text-left rounded-lg border transition-all",
                                        selectedDomain === domain
                                            ? "border-point-2 bg-point-2/10 text-point-1"
                                            : "border-gray-2 hover:border-gray-4 hover:bg-gray-1",
                                    )}
                                >
                                    {domain}
                                </button>
                            ))}

                            {/* 스크롤 테스트를 위한 추가 콘텐츠 */}
                            <div className="mt-4 pt-4 border-t border-gray-2">
                                <p className="text-sm text-gray-5 mb-2">
                                    직접 입력하시려면 아래 입력창을 사용하세요.
                                </p>
                                <Input
                                    type="text"
                                    placeholder="example.com"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </LayerPopupBody>

                    <LayerPopupFooter>
                        <Button
                            variant="outline"
                            onClick={() => setIsEmailPopupOpen(false)}
                        >
                            취소
                        </Button>
                        <Button
                            variant="point1"
                            onClick={() => {
                                if (selectedDomain) {
                                    handleDomainSelect(selectedDomain);
                                }
                            }}
                        >
                            선택
                        </Button>
                    </LayerPopupFooter>
                </LayerPopupContent>
            </LayerPopup>

            {/* 마케팅 수신 동의 레이어 팝업 */}
            <LayerPopup
                open={isMarketingPopupOpen}
                onOpenChange={setIsMarketingPopupOpen}
            >
                <LayerPopupContent stretch="sm">
                    <LayerPopupHeader>
                        <LayerPopupTitle>마케팅 정보 수신 동의</LayerPopupTitle>
                        <LayerPopupCloseButton />
                    </LayerPopupHeader>

                    <LayerPopupBody>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    수집 및 이용 목적
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed">
                                    회사는 수집한 개인정보를 다음의 목적을 위해
                                    활용합니다.
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-5">
                                    <li>신규 서비스 및 이벤트 정보 안내</li>
                                    <li>맞춤형 광고 및 혜택 제공</li>
                                    <li>설문조사 및 마케팅 분석</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    수집하는 개인정보 항목
                                </h3>
                                <p className="text-sm text-gray-5">
                                    이메일 주소, 이름
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    보유 및 이용 기간
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed">
                                    회원 탈퇴 시 또는 동의 철회 시까지 보유 및
                                    이용합니다. 단, 관계 법령에 의해 보존할
                                    필요가 있는 경우 해당 기간 동안 보관합니다.
                                </p>
                            </div>

                            <div className="p-3 bg-gray-1 rounded-lg">
                                <p className="text-xs text-gray-6">
                                    ※ 마케팅 정보 수신에 동의하지 않으셔도
                                    서비스 이용이 가능합니다.
                                </p>
                            </div>
                        </div>
                    </LayerPopupBody>

                    <LayerPopupFooter>
                        <Button
                            variant="outline"
                            onClick={handleMarketingDecline}
                        >
                            동의 안 함
                        </Button>
                        <Button
                            variant="point1"
                            onClick={handleMarketingConsent}
                        >
                            동의함
                        </Button>
                    </LayerPopupFooter>
                </LayerPopupContent>
            </LayerPopup>

            {/* 회원가입 약관 동의 레이어 팝업 */}
            <LayerPopup
                open={isTermsPopupOpen}
                onOpenChange={setIsTermsPopupOpen}
            >
                <LayerPopupContent>
                    <LayerPopupHeader>
                        <LayerPopupTitle>회원가입 약관</LayerPopupTitle>
                        <LayerPopupCloseButton />
                    </LayerPopupHeader>

                    <LayerPopupBody>
                        <LayerPopupNotice>
                            <p>
                                본 약관에 동의하시면 회원 가입 화면으로
                                이동합니다.
                            </p>
                            <p>약관은 한글로만 제공됩니다.</p>
                        </LayerPopupNotice>
                        <div className="flex flex-col gap-4 mt-7">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms-of-service" />
                                <label
                                    htmlFor="terms-of-service"
                                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {LABELS.termsOfService}
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="privacy-policy" />
                                <label
                                    htmlFor="privacy-policy"
                                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {LABELS.privacyPolicy}
                                </label>
                            </div>
                            <FieldMessage type="error">
                                {VALIDATION_MESSAGES.terms.error}
                            </FieldMessage>

                            {/* 약관보기 셀렉트 */}
                            <div>
                                <label className="text-sm font-normal mb-2 block">
                                    약관보기
                                </label>
                                <Select defaultValue="privacy">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="privacy">
                                            개인정보 처리방침
                                        </SelectItem>
                                        <SelectItem value="terms">
                                            이용약관 동의
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* 수집하는 개인정보 항목 */}
                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    올음(집필) 개인정보처리방침
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed mb-3">
                                    회사는 서비스 이용을 위해 필요한 최소한의
                                    개인정보를 수집합니다. 서비스 제공을 위해
                                    반드시 필요한 최소한의 정보를 필수항목으로,
                                    그 외 특화된 서비스를 제공하기 위해 추가
                                    수집하는 정보는 선택항목으로 동의를 받고
                                    있으며, 선택항목에 동의하지 않은 경우에도
                                    서비스 이용 제한은 없습니다.
                                </p>
                                {/* 목차 */}

                                <h3 className="font-bold text-gray-6 mb-3">
                                    [목차]
                                </h3>
                                <ul className="text-sm text-gray-5 space-y-1">
                                    <li>1. 수집하는 개인 정보</li>
                                    <li>2. 개인정보의 이용</li>
                                    <li>3. 개인정보의 처리 및 보유 기간</li>
                                </ul>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-5 mb-3">
                                    <li>
                                        회원정보 수정: [필수] 필명,
                                        휴대전화번호, 이메일
                                    </li>
                                    <li>
                                        상담 접수, CS문의 대응: [필수] 필명,
                                        아이디, 휴대전화번호, 이메일,
                                        단말기OS정보
                                    </li>
                                    <li>
                                        멤버십 가입: [필수] 결제자 정보(이름,
                                        휴대폰번호, 이메일), 결제 정보(카드번호,
                                        유효기간, 생년월일, 성별)
                                    </li>
                                    <li>
                                        환불 계좌 접수: [필수] 예금주명, 은행명,
                                        계좌번호
                                    </li>
                                    <li>
                                        본인 인증: [필수] 이름, 성별, 생년월일,
                                        본인인증정보 또는 중복가입확인정보(DI),
                                        휴대폰번호, 통신사 이름
                                    </li>
                                    <li>
                                        이상행위 탐지, 부정이용 방지 및 서비스
                                        개선을 위한 분석, 환불과 관련한 이용
                                        내역 확인: [필수] 서비스 이용기록,
                                        단말기 정보(OS)
                                    </li>
                                    <li>
                                        수익 관리 서비스: [필수] 작품별
                                        월별/연간 수익금, 작품 합산 월별/연간
                                        수익금
                                    </li>
                                </ul>
                                <p className="text-sm text-gray-5 leading-relaxed mb-2">
                                    서비스 이용 과정에서 단말기정보, IP 주소,
                                    쿠키, 서비스 이용 내역 등의 정보가 자동으로
                                    생성되어 수집될 수 있습니다.
                                </p>
                                <p className="text-sm text-gray-5 leading-relaxed mb-2">
                                    서비스 이용 내역이란 서비스 이용 과정에서
                                    자동화된 방법으로 생성되거나 이용자가 입력한
                                    정보가 송수신되면서 회사 서버에 자동으로
                                    기록 및 수집될 수 있는 정보를 의미합니다.
                                </p>
                                <p className="text-sm text-gray-5 leading-relaxed">
                                    회사는 다음과 같은 방법으로 개인정보를
                                    수집합니다: 회원가입 및 서비스 이용 과정에서
                                    이용자가 개인정보 수집에 대해 동의를 하고
                                    직접 정보를 입력하는 방법으로 수집합니다.
                                </p>
                            </div>

                            {/* 개인정보의 이용 */}
                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    개인정보의 이용
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed mb-2">
                                    회사는 다음의 목적으로 개인정보를
                                    이용합니다.
                                </p>
                                <p className="text-sm font-semibold text-gray-6 mb-1">
                                    회원제 서비스 운영
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-5 mb-2">
                                    <li>
                                        회원 식별, 회원가입 의사 확인, 회원관리
                                    </li>
                                    <li>검색, 등록 등의 기능 제공</li>
                                    <li>
                                        문의사항 또는 불만처리, 공지사항 전달
                                    </li>
                                    <li>
                                        서비스의 원활한 운영에 지장을 주는
                                        행위(계정 도용, 부정 이용 행위 등
                                        포함)에 대한 방지 및 제재
                                    </li>
                                    <li>
                                        인구통계학적 특성과 이용자의 관심, 기호,
                                        성향의 추정을 통한 맞춤형 콘텐츠 추천 및
                                        제공
                                    </li>
                                    <li>
                                        신규 서비스·기능의 개발 및 서비스·기능
                                        개선, 개인화된 서비스 제공, 프라이버시
                                        보호를 위한 서비스 환경 구축
                                    </li>
                                    <li>
                                        서비스 이용 기록, 접속 빈도 및 서비스
                                        이용에 대한 통계 등 내부 통계 분석
                                    </li>
                                    <li>시스템 안정성 확보</li>
                                </ul>
                            </div>

                            {/* 개인정보의 제공 및 위탁 */}
                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    개인정보의 제공 및 위탁
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed mb-2">
                                    회사는 서비스 제공을 위해 아래와 같은 업무를
                                    위탁합니다.
                                </p>
                                <p className="text-sm text-gray-5 leading-relaxed mb-2">
                                    회사는 원활한 개인정보 업무처리를 위하여
                                    다음과 같이 개인정보 처리 업무를 위탁하고
                                    있습니다.
                                </p>
                                <div className="bg-gray-1 p-3 rounded mb-2">
                                    <p className="text-sm text-gray-6 mb-1">
                                        <span className="font-semibold">
                                            수탁자:
                                        </span>{" "}
                                        KG 모빌리언스
                                    </p>
                                    <p className="text-sm text-gray-6">
                                        <span className="font-semibold">
                                            위탁하는 업무의 내용:
                                        </span>{" "}
                                        휴대폰 본인 인증 서비스, 결제 서비스
                                    </p>
                                </div>
                                <p className="text-sm text-gray-5 leading-relaxed mb-3">
                                    회사는 위탁계약 체결 시 위탁업무 수행목적 외
                                    개인정보 처리금지, 기술적·관리적 보호조치,
                                    재위탁 제한, 수탁자에 대한 관리·감독,
                                    손해배상 등 책임에 관한 사항을 계약서 등
                                    문서에 명시합니다. 또한 회사는 수탁자가
                                    개인정보를 안전하게 처리하는지를 감독하고
                                    있습니다.
                                </p>
                                <p className="text-sm text-gray-5 leading-relaxed mb-2">
                                    회사는 서비스 제공을 위해 아래와 같은 업무를
                                    국외 업체에 위탁합니다.
                                </p>
                                <div className="bg-gray-1 p-3 rounded">
                                    <p className="text-sm text-gray-6 mb-1">
                                        <span className="font-semibold">
                                            국외이전의 법적 근거:
                                        </span>{" "}
                                        개인정보 보호법 제28조의8 제1항
                                        제3호(계약 이행을 위한 국외 처리위탁
                                        보관)
                                    </p>
                                    <p className="text-sm text-gray-6">
                                        <span className="font-semibold">
                                            이전하는 개인정보 항목:
                                        </span>{" "}
                                        필명, 휴대전화번호, 이메일, 아이디,
                                        단말기OS정보, 이름, 카드번호, 유효기간,
                                        생년월일, 성별, 예금주명, 은행명,
                                        계좌번호, 본인인증정보 또는
                                        중복가입확인정보(DI), 통신사 이름,
                                        서비스 이용기록
                                    </p>
                                </div>
                            </div>

                            {/* 행태 정보의 수집·이용 및 거부 */}
                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    행태 정보의 수집·이용 및 거부 등에 관한 사항
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed mb-2">
                                    회사는 다음과 같이 행태정보를 수집하고
                                    있습니다.
                                </p>
                                <div className="bg-gray-1 p-3 rounded">
                                    <ul className="space-y-1 text-sm text-gray-6">
                                        <li>
                                            <span className="font-semibold">
                                                법적 근거:
                                            </span>{" "}
                                            개인정보 보호법 제15조 제1항 제1호
                                            (동의)
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                수집 항목:
                                            </span>{" "}
                                            접속 정보, 플랫폼 사용 이력
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                수집 방법:
                                            </span>{" "}
                                            플랫폼 방문, 이용 시 자동 수집
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                수집 목적:
                                            </span>{" "}
                                            회원의 환불 요청 시 유료 서비스 이용
                                            내역 확인
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                보유, 이용 기간:
                                            </span>{" "}
                                            탈퇴일로부터 1년간 보관
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </LayerPopupBody>

                    <LayerPopupFooter>
                        <Button
                            variant="oulinePoint1"
                            onClick={handleTermsDecline}
                        >
                            취소
                        </Button>
                        <Button variant="point1" onClick={handleTermsConsent}>
                            동의 후 정보 입력
                        </Button>
                    </LayerPopupFooter>
                </LayerPopupContent>
            </LayerPopup>
        </div>
    );
}
