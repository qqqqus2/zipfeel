'use client';

import { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const SUPPORTED_LANGUAGES = ['ko', 'en'];
const DEFAULT_LANGUAGE = 'ko';

/**
 * 동적으로 언어별 번역 파일을 로드합니다
 * @param {string} language - 로드할 언어 코드 (ko, en)
 * @returns {Promise<Object>} 모든 네임스페이스의 번역 데이터
 */
async function loadTranslations(language) {
  try {
    const modules = {
      common: await import(`@/locales/${language}/common.json`),
      auth: await import(`@/locales/${language}/auth.json`),
      work: await import(`@/locales/${language}/work.json`),
      navigation: await import(`@/locales/${language}/navigation.json`),
      validation: await import(`@/locales/${language}/validation.json`),
    };

    // .default를 통해 실제 JSON 데이터 추출
    return Object.entries(modules).reduce((acc, [key, module]) => {
      acc[key] = module.default;
      return acc;
    }, {});
  } catch (error) {
    console.error(`Failed to load translations for language: ${language}`, error);
    return {};
  }
}

/**
 * 언어 설정 및 번역 데이터를 제공하는 Provider 컴포넌트
 *
 * 기능:
 * - 현재 언어 상태 관리
 * - localStorage에 언어 설정 저장
 * - 언어 변경 시 자동으로 번역 데이터 로드
 * - 모든 하위 컴포넌트에 번역 데이터 제공
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // 컴포넌트 마운트 시 localStorage에서 저장된 언어 설정 불러오기
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // 언어가 변경될 때마다 해당 언어의 번역 파일 로드
  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const trans = await loadTranslations(language);
      setTranslations(trans);
      setIsLoading(false);
    }
    load();
  }, [language]);

  /**
   * 언어를 변경하고 localStorage에 저장
   * @param {string} newLanguage - 변경할 언어 코드
   */
  const changeLanguage = (newLanguage) => {
    if (SUPPORTED_LANGUAGES.includes(newLanguage)) {
      setLanguage(newLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
    } else {
      console.warn(`Unsupported language: ${newLanguage}`);
    }
  };

  const value = {
    language,              // 현재 언어 코드 (ko, en)
    changeLanguage,        // 언어 변경 함수
    translations,          // 모든 번역 데이터
    isLoading,            // 번역 파일 로딩 상태
    supportedLanguages: SUPPORTED_LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
