"use client";

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
    VALIDATION_MESSAGES,
    VALIDATION_RULES,
    PLACEHOLDERS,
    LABELS,
    BUTTONS,
} from "@/constants/joinValidation";

export default function Join() {
    const handleDuplicateCheck = () => {
        // TODO: 아이디 중복 확인 API 호출
        console.log("아이디 중복 확인");
    };

    const handlePenNameDuplicateSearch = () => {
        // TODO: 필명 중복 조회 API 호출
        console.log("필명 중복 조회");
    };

    const handleEmailDomainSelect = () => {
        // TODO: 이메일 선택 레이어 팝업 열기
        console.log("이메일 도메인 선택 팝업 열기");
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
                            {VALIDATION_RULES.password.rules.map((rule, index) => (
                                <InfoMessage key={index} title={rule.title} />
                            ))}
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
                            <Checkbox id="marketing-consent" />
                            <label
                                htmlFor="marketing-consent"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                <ButtonWrap>
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
        </div>
    );
}
