'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';

/**
 * 번역 기능을 제공하는 커스텀 Hook
 *
 * @param {string} namespace - 사용할 번역 네임스페이스 (common, auth, work, navigation, validation)
 * @returns {Object} { t, language, changeLanguage }
 *
 * 사용 예시:
 * const { t } = useTranslation('auth');
 * const title = t('login.title'); // "로그인" 또는 "Login"
 * const welcome = t('login.welcome'); // "Zipfeel에 오신 것을 환영합니다" 또는 "Welcome to Zipfeel"
 *
 * 파라미터가 있는 경우:
 * const count = t('common.count', { count: 5 }); // "5개" 또는 "5 items"
 */
export function useTranslation(namespace = 'common') {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { language, changeLanguage, translations, isLoading } = context;

  /**
   * 번역 키를 실제 번역된 텍스트로 변환하는 함수
   *
   * @param {string} key - 번역 키 (점 표기법 지원: 'login.title')
   * @param {Object} params - 동적 파라미터 객체 (예: { count: 5 })
   * @returns {string} 번역된 텍스트
   */
  const t = (key, params = {}) => {
    // 네임스페이스에 해당하는 번역 데이터 가져오기
    let value = translations[namespace];

    if (!value) {
      console.warn(`Translation namespace '${namespace}' not found`);
      return key;
    }

    // 점 표기법으로 중첩된 객체 탐색 (예: 'login.title' -> translations.auth.login.title)
    const keys = key.split('.');
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        console.warn(`Translation key '${key}' not found in namespace '${namespace}'`);
        return key; // 번역 키를 찾지 못하면 키 자체를 반환
      }
    }

    // 파라미터 치환 (예: "{count}개" + {count: 5} -> "5개")
    if (typeof value === 'string') {
      return value.replace(/\{(\w+)\}/g, (match, param) => {
        return params[param] !== undefined ? params[param] : match;
      });
    }

    return value;
  };

  return {
    t,                    // 번역 함수
    language,            // 현재 언어 코드
    changeLanguage,      // 언어 변경 함수
    isLoading,          // 번역 데이터 로딩 상태
  };
}

/**
 * 다중 네임스페이스를 사용하는 Hook
 *
 * @param {Array<string>} namespaces - 사용할 네임스페이스 배열
 * @returns {Object} { t, language, changeLanguage }
 *
 * 사용 예시:
 * const { t } = useTranslations(['common', 'auth']);
 * const loginButton = t('auth:login.loginButton'); // "로그인"
 * const saveButton = t('common:buttons.save'); // "저장"
 */
export function useTranslations(namespaces = ['common']) {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }

  const { language, changeLanguage, translations, isLoading } = context;

  /**
   * 네임스페이스를 포함한 번역 함수
   * @param {string} key - 'namespace:key' 형식의 번역 키
   * @param {Object} params - 동적 파라미터 객체
   */
  const t = (key, params = {}) => {
    const [namespace, ...keyParts] = key.split(':');
    const actualKey = keyParts.join(':');

    if (!actualKey) {
      console.warn(`Invalid translation key format: '${key}'. Use 'namespace:key' format.`);
      return key;
    }

    let value = translations[namespace];

    if (!value) {
      console.warn(`Translation namespace '${namespace}' not found`);
      return key;
    }

    const keys = actualKey.split('.');
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        console.warn(`Translation key '${actualKey}' not found in namespace '${namespace}'`);
        return key;
      }
    }

    if (typeof value === 'string') {
      return value.replace(/\{(\w+)\}/g, (match, param) => {
        return params[param] !== undefined ? params[param] : match;
      });
    }

    return value;
  };

  return {
    t,
    language,
    changeLanguage,
    isLoading,
  };
}
