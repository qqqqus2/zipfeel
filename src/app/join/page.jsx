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
                        <LayerPopupTitle>{POPUPS.emailDomain.title}</LayerPopupTitle>
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
                        <LayerPopupTitle>{POPUPS.marketing.title}</LayerPopupTitle>
                        <LayerPopupCloseButton />
                    </LayerPopupHeader>

                    <LayerPopupBody>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    {POPUPS.marketing.purpose}
                                </h3>
                                <p className="text-sm text-gray-5 leading-relaxed">
                                    {POPUPS.marketing.purposeDescription}
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-5">
                                    {POPUPS.marketing.purposeItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
                                    {POPUPS.marketing.collectionTitle}
                                </h3>
                                <p className="text-sm text-gray-5">
                                    {POPUPS.marketing.collectionItems}
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-6 mb-2">
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
                    </LayerPopupBody>

                    <LayerPopupFooter>
                        <Button variant="outline" onClick={handleTermsDecline}>
                            {BUTTONS.disagree}
                        </Button>
                        <Button variant="point1" onClick={handleTermsConsent}>
                            {BUTTONS.agree}
                        </Button>
                    </LayerPopupFooter>
                </LayerPopupContent>
            </LayerPopup>
        </div>
    );
}
