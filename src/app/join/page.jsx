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
import { cn } from "@/lib/utils";
import { useJoinValidation } from "@/hooks/useJoinValidation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Join() {
    // 다국어 Hook 사용
    const {
        LABELS,
        PLACEHOLDERS,
        BUTTONS,
        VALIDATION_MESSAGES,
        VALIDATION_RULES,
        POPUPS,
    } = useJoinValidation();

    const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
    const [isMarketingPopupOpen, setIsMarketingPopupOpen] = useState(false);
    const [isTermsPopupOpen, setIsTermsPopupOpen] = useState(true);
    const [selectedDomain, setSelectedDomain] = useState("");
    const [isMarketingConsent, setIsMarketingConsent] = useState(false);
    const [selectedTermsType, setSelectedTermsType] = useState("terms");

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
        console.log("아이디 중복 확인");
    };

    const handlePenNameDuplicateSearch = () => {
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
        e.preventDefault();
        setIsMarketingPopupOpen(true);
    };

    const handleMarketingConsent = () => {
        setIsMarketingConsent(true);
        setIsMarketingPopupOpen(false);
    };

    const handleMarketingDecline = () => {
        setIsMarketingConsent(false);
        setIsMarketingPopupOpen(false);
    };

    const handleTermsConsent = () => {
        setIsTermsPopupOpen(false);
    };

    const handleTermsDecline = () => {
        alert(POPUPS.terms.requiredAlert);
    };

    const handleCancel = () => {
        console.log("취소");
    };

    const handleSubmit = () => {
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
                        <LayerPopupTitle>
                            {POPUPS.emailDomain.title}
                        </LayerPopupTitle>
                        <LayerPopupCloseButton />
                    </LayerPopupHeader>

                    <LayerPopupBody>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-gray-5 mb-2">
                                {POPUPS.emailDomain.description}
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

                            <div className="mt-4 pt-4 border-t border-gray-2">
                                <p className="text-sm text-gray-5 mb-2">
                                    {POPUPS.emailDomain.customInput}
                                </p>
                                <Input
                                    type="text"
                                    placeholder={PLACEHOLDERS.emailDomainCustom}
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
                            {BUTTONS.cancel}
                        </Button>
                        <Button
                            variant="point1"
                            onClick={() => {
                                if (selectedDomain) {
                                    handleDomainSelect(selectedDomain);
                                }
                            }}
                        >
                            {BUTTONS.select}
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
                        <LayerPopupTitle>
                            {POPUPS.marketing.title}
                        </LayerPopupTitle>
                        <LayerPopupCloseButton />
                    </LayerPopupHeader>

                    <LayerPopupBody>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h3 className="font-semibold text-gray-6 mb-2">
                                    {POPUPS.marketing.purpose}
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed">
                                    {POPUPS.marketing.purposeDescription}
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-5">
                                    {POPUPS.marketing.purposeItems.map(
                                        (item, index) => (
                                            <li key={index}>{item}</li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-6 mb-2">
                                    {POPUPS.marketing.collectionTitle}
                                </h3>
                                <p className="text-sm text-gray-5">
                                    {POPUPS.marketing.collectionItems}
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-6 mb-2">
                                    {POPUPS.marketing.retentionTitle}
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed">
                                    {POPUPS.marketing.retentionDescription}
                                </p>
                            </div>

                            <div className="p-3 bg-gray-1 rounded-lg">
                                <p className="text-xs text-gray-6">
                                    {POPUPS.marketing.notice}
                                </p>
                            </div>
                        </div>
                    </LayerPopupBody>

                    <LayerPopupFooter>
                        <Button
                            variant="outline"
                            onClick={handleMarketingDecline}
                        >
                            {BUTTONS.disagree}
                        </Button>
                        <Button
                            variant="point1"
                            onClick={handleMarketingConsent}
                        >
                            {BUTTONS.agree}
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
                        <LayerPopupTitle>{POPUPS.terms.title}</LayerPopupTitle>
                        <LayerPopupCloseButton />
                    </LayerPopupHeader>

                    <LayerPopupBody>
                        <LayerPopupNotice>
                            <p>{POPUPS.terms.notice}</p>
                            <p>{POPUPS.terms.languageNotice}</p>
                        </LayerPopupNotice>
                        <div className="flex flex-col gap-5 mt-[30px]">
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
                        </div>
                        <div className="flex flex-col gap-6 mt-[30px]">
                            <div>
                                <label className="text-sm font-medium mb-2 block">
                                    {POPUPS.terms.viewTermsLabel}
                                </label>
                                <Select
                                    value={selectedTermsType}
                                    onValueChange={setSelectedTermsType}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="terms">
                                            {POPUPS.terms.termsOfServiceOption}
                                        </SelectItem>
                                        <SelectItem value="privacy">
                                            {POPUPS.terms.privacyPolicyOption}
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {/* 약관 내용 */}
                                {selectedTermsType === "terms" ? (
                                    <div className="mt-4 p-4 bg-gray-1 rounded-lg text-sm text-gray-6 max-h-[300px] overflow-y-auto">
                                        이용약관 내용이 여기에 표시됩니다.
                                    </div>
                                ) : (
                                    <div className="mt-4 p-4 bg-gray-1 rounded-lg text-sm text-gray-6 max-h-[300px] overflow-y-auto">
                                    올음(집필) 개인정보처리방침 유한회사
                                    올음(이하 “회사”)의 “집필” 서비스를 이용해
                                    주셔서 감사합니다. 회사는 이용자의
                                    개인정보가 어떻게 처리되는지 설명하고,
                                    이용자의 고충을 원활하게 처리할 수 있도록
                                    하기 위하여, 다음과 같이 개인정보
                                    처리방침(이하 “방침”)을 수립공개합니다.
                                    [목차] 수집하는 개인 정보 개인정보의 이용
                                    개인정보의 처리 및 보유 기간 ... 수집하는
                                    개인정보 항목회사는 서비스 이용을 위해
                                    필요한 최소한의 개인정보를 수집합니다.
                                    서비스 제공을 위해 반드시 필요한 최소한의
                                    정보를 필수항목으로, 그 외 특화된 서비스를
                                    제공하기 위해 추가 수집하는 정보는
                                    선택항목으로 동의를 받고 있으며, 선택항목에
                                    동의하지 않은 경우에도 서비스 이용 제한은
                                    없습니다. 회사가 “집필” 서비스를 제공하기
                                    위하여 회원가입 시점에 이용자의 동의를 받아
                                    이용자로부터 수집하는 개인정보의 항목은
                                    다음과 같습니다. [필수] 필명, 아이디,
                                    비밀번호, 이름, 성별, 생년월일,
                                    휴대전화번호, 내/외국인 여부, 통신사정보,
                                    CI, DI  회원가입 이후 제공되는 서비스들로,
                                    이용자의 동의를 받아 이용자로부터 수집하는
                                    개인정보의 항목은 다음과 같습니다. -
                                    회원정보 수정: [필수] 필명, 휴대전화번호,
                                    이메일 - 상담 접수, CS문의 대응: [필수]
                                    필명, 아이디, 휴대 전화번호, 이메일,
                                    단말기OS정보 - 멤버십 가입: [필수] 결제자
                                    정보(이름, 휴대폰번호, 이메일), 결제
                                    정보(카드번호, 유효기간, 생년월일, 성별)
                                    - 환불 계좌 접수: [필수] 예금주명, 은행명,
                                    계좌번호 - 본인 인증: [필수] 이름, 성별,
                                    생년월일, 본인인증정 보 또는
                                    중복가입확인정보(DI), 휴대폰번호, 통신사
                                    이름 - 이상행위 탐지, 부정이용 방지 및
                                    서비스 개선을 위 한 분석, 환불과 관련한 이용
                                    내역 확인: [필수] 서비 스 이용기록, 단말기
                                    정보(OS)   - 수익 관리 서비스: [필수] 작품별
                                    월별/연간 수익금, 작품 합산 월별/연간 수익금
                                      서비스 이용 과정에서 단말기정보, IP 주소,
                                    쿠키, 서비스 이용 내역 등의 정보가 자동으로
                                    생성되어 수집될 수 있습니다. 서비스 이용
                                    내역이란 서비스 이용 과정에서 자동화된
                                    방법으로 생성되거나 이용자가 입력한 정보가
                                    송수신되면서 회사 서버에 자동으로 기록 및
                                    수집될 수 있는 정보를 의미합니다. 이와 같은
                                    정보는 다른 정보와의 결합 여부, 처리하는
                                    방식 등에 따라 개인정보에 해당할 수 있고
                                    개인정보에 해당하지 않을 수도 있습니다.
                                    서비스 이용 내역에는 이용자가 입력한 콘텐츠,
                                    이용자가 입력한 검색어, 방문 및 접속기록,
                                    서비스 부정이용 기록 등이 포함될 수
                                    있습니다. 예를 들면, 이용자가 작성한 글 등은
                                    회사의 서버에 저장됩니다. 또한 이용자가
                                    서비스 내 데이터를 검색한 경우, 검색 등을 한
                                    일시, 검색을 한 데이터 등 이용자가 서비스를
                                    이용하는 형태, 방식 등의 정보도 서버에
                                    기록됩니다. 회사는 다음과 같은 방법으로
                                    개인정보를 수집합니다. - 회원가입 및 서비스
                                    이용 과정에서 이용자가 개인정 보 수집에 대해
                                    동의를 하고 직접 정보를 입력하는 방법으로
                                    수집합니다. - 쿠키와 같은 생성정보는 PC웹,
                                    모바일 웹/앱 이용 과정에서 자동으로 생성되어
                                    수집될 수 있습니다. - 고객센터를 통한 상담
                                    과정에서 웹페이지, 메일, 팩 스, 전화 등을
                                    통해 수집됩니다. 개인정보의 이용회사는
                                    다음의 목적으로 개인정보를 이용합니다.
                                    회원제 서비스 운영 - 회원 식별, 회원가입
                                    의사 확인, 회원관리 - 검색, 등록 등의 기능
                                    제공 - 문의사항 또는 불만처리, 공지사항 전달
                                    - 서비스의 원활한 운영에 지장을 주는
                                    행위(계정 도 용, 부정 이용 행위 등 포함)에
                                    대한 방지 및 제재 - 인구통계학적 특성과
                                    이용자의 관심, 기호, 성향의 추정을 통한
                                    맞춤형 콘텐츠 추천 및 제공 - 신규
                                    서비스기능의 개발 및 서비스기능 개선, 개인
                                    화된 서비스 제공, 프라이버시 보호를 위한
                                    서비스 환경 구축 - 서비스 이용 기록, 접속
                                    빈도 및 서비스 이용에 대한 통계 등 내부 통계
                                    분석 - 시스템 안정성 확보 ..... .....
                                    개인정보의 제공 및 위탁 회사는 서비스 제공을
                                    위해 아래와 같은 업무를 위탁합니다. 회사는
                                    원활한 개인정보 업무처리를 위하여 다음과
                                    같이 개인정보 처리 업무를 위탁하고 있습니다.
                                    수탁자 위탁하는 업무의 내용 KG 모빌리언스
                                    휴대폰 본인 인증 서비스 KG 모빌리언스 결제
                                    서비스 - 회사는 위탁계약 체결 시 위탁업무
                                    수행목적 외 개 인 정보 처리금지,
                                    기술적·관리적 보호조치, 재위탁 제한,
                                    수탁자에 대한 관리·감독, 손해배상 등 책임에
                                    관한 사항을 계약서 등 문서에 명시합니다.
                                    또한 회 사는 수탁자가 개인정보를 안전하게
                                    처리하는지를 감독하고 있습니다. - ... 회사는
                                    서비스 제공을 위해 아래와 같은 업무를 국외
                                    업체에 위탁합니다.회사는 원활한 개인정보
                                    업무처리를 위하여 다음과 같이 개인정보 처리
                                    업무를 국외 업체에 위탁하고 있습니다. 항목
                                    내용 국외이전의 법적 근거 개인정보 보호법
                                    제28조의8 제1항 제3호(계약 이행을 위한 국외
                                    처리위탁·보관) 이전하는 개인정보 항목 [필명,
                                    휴대전화번호, 이메일, 아이디, 단말기OS정보,
                                    이름, 카드번호, 유효기간, 생년월일, 성별,
                                    예금주명, 은행명, 계좌번호, 본인인증정보
                                    또는 중복가입확인정보(DI), 통신사 이름,
                                    서비스 이용기록] ..... 행태정보의 수집이용
                                    및 거부 등에 관한 사항회사는 다음과 같이
                                    행태정보를 수집하고 있습니다. 항목 내용 법적
                                    근거 개인정보 보호법 제15조 제1항 제1호
                                    (동의) 수집 항목 접속 정보, 플랫폼 사용 이력
                                    수집 방법 플랫폼 방문, 이용 시 자동 수집
                                    수집 목적 회원의 환불 요청 시 유료 서비스
                                    이용 내역 확인 보유, 이용 기간 [탈퇴일로부터
                                    1년간 보관] 변경 전 개인정보처리방침 보기
                                    (YYYY.MM.DD 시행)
                                    </div>
                                )}
                            </div>
                        </div>
                    </LayerPopupBody>

                    <LayerPopupFooter>
                        <Button
                            variant="oulinePoint1"
                            onClick={handleTermsDecline}
                        >
                            {BUTTONS.cancel}
                        </Button>
                        <Button variant="point1" onClick={handleTermsConsent}>
                            {BUTTONS.agreeAndInput}
                        </Button>
                    </LayerPopupFooter>
                </LayerPopupContent>
            </LayerPopup>
        </div>
    );
}
