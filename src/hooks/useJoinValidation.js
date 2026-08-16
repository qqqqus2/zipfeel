'use client';

import { useTranslation } from '@/hooks/useTranslation';

/**
 * 회원가입 폼 검증 관련 번역 데이터를 제공하는 Hook
 * 기존 joinValidation.js의 상수들을 다국어로 제공
 */
export function useJoinValidation() {
  const { t: authT } = useTranslation('auth');
  const { t: validationT } = useTranslation('validation');

  // LABELS - auth.json에서 가져옴
  const LABELS = {
    id: authT('signup.labels.id'),
    password: authT('signup.labels.password'),
    penName: authT('signup.labels.penName'),
    email: authT('signup.labels.email'),
    marketingConsent: authT('signup.labels.marketingConsent'),
    termsOfService: authT('signup.labels.termsOfService'),
    privacyPolicy: authT('signup.labels.privacyPolicy'),
  };

  // PLACEHOLDERS - auth.json에서 가져옴
  const PLACEHOLDERS = {
    id: authT('signup.placeholders.id'),
    password: authT('signup.placeholders.password'),
    passwordConfirm: authT('signup.placeholders.passwordConfirm'),
    penName: authT('signup.placeholders.penName'),
    emailLocal: authT('signup.placeholders.emailLocal'),
    emailDomain: authT('signup.placeholders.emailDomain'),
    emailDomainCustom: authT('signup.placeholders.emailDomainCustom'),
  };

  // BUTTONS - auth.json에서 가져옴
  const BUTTONS = {
    duplicateCheck: authT('signup.buttons.duplicateCheck'),
    duplicateSearch: authT('signup.buttons.duplicateSearch'),
    cancel: authT('signup.buttons.cancel'),
    submit: authT('signup.submitButton'),
    select: authT('signup.buttons.select'),
    agree: authT('signup.buttons.agree'),
    disagree: authT('signup.buttons.disagree'),
    agreeAndInput: authT('signup.buttons.agreeAndInput'),
  };

  // VALIDATION_MESSAGES - validation.json에서 가져옴
  const VALIDATION_MESSAGES = {
    id: {
      success: validationT('messages.id.success'),
      error: validationT('messages.id.error'),
    },
    password: {
      error: validationT('messages.password.error'),
    },
    penName: {
      duplicate: validationT('messages.penName.duplicate', { count: '0,0000' }),
    },
    terms: {
      error: validationT('messages.terms.error'),
    },
  };

  // VALIDATION_RULES - validation.json에서 가져옴
  const passwordRules = validationT('rules.password.rules');
  const idItems = validationT('rules.id.items');
  const idDuplicateItems = validationT('rules.idDuplicate.items');
  const penNameItems = validationT('rules.penName.items');
  const penNameDuplicateItems = validationT('rules.penNameDuplicate.items');

  const VALIDATION_RULES = {
    id: {
      title: validationT('rules.id.title'),
      items: Array.isArray(idItems) ? idItems : [],
    },
    idDuplicate: {
      title: validationT('rules.idDuplicate.title'),
      items: Array.isArray(idDuplicateItems) ? idDuplicateItems : [],
    },
    password: {
      rules: Array.isArray(passwordRules) ? passwordRules : [],
    },
    penName: {
      title: validationT('rules.penName.title'),
      items: Array.isArray(penNameItems) ? penNameItems : [],
    },
    penNameDuplicate: {
      title: validationT('rules.penNameDuplicate.title'),
      items: Array.isArray(penNameDuplicateItems) ? penNameDuplicateItems : [],
    },
    email: {
      title: validationT('rules.email.title'),
    },
  };

  // 팝업 관련 텍스트
  const marketingPurposeItems = authT('signup.popups.marketing.purposeItems');

  const POPUPS = {
    emailDomain: {
      title: authT('signup.popups.emailDomain.title'),
      description: authT('signup.popups.emailDomain.description'),
      customInput: authT('signup.popups.emailDomain.customInput'),
    },
    marketing: {
      title: authT('signup.popups.marketing.title'),
      purpose: authT('signup.popups.marketing.purpose'),
      purposeDescription: authT('signup.popups.marketing.purposeDescription'),
      purposeItems: Array.isArray(marketingPurposeItems) ? marketingPurposeItems : [],
      collectionTitle: authT('signup.popups.marketing.collectionTitle'),
      collectionItems: authT('signup.popups.marketing.collectionItems'),
      retentionTitle: authT('signup.popups.marketing.retentionTitle'),
      retentionDescription: authT('signup.popups.marketing.retentionDescription'),
      notice: authT('signup.popups.marketing.notice'),
    },
    terms: {
      title: authT('signup.popups.terms.title'),
      notice: authT('signup.popups.terms.notice'),
      languageNotice: authT('signup.popups.terms.languageNotice'),
      requiredAlert: authT('signup.popups.terms.requiredAlert'),
      viewTermsLabel: authT('signup.popups.terms.viewTermsLabel'),
      termsOfServiceOption: authT('signup.popups.terms.termsOfServiceOption'),
      privacyPolicyOption: authT('signup.popups.terms.privacyPolicyOption'),
    },
  };

  return {
    LABELS,
    PLACEHOLDERS,
    BUTTONS,
    VALIDATION_MESSAGES,
    VALIDATION_RULES,
    POPUPS,
  };
}
