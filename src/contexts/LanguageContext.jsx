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

  // 언어 변경 시 data-eng 속성을 가진 요소들의 텍스트 토글
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // data-eng 속성을 가진 요소들의 텍스트를 변경하는 함수
    const updateElements = (elements) => {
      elements.forEach((element) => {
        const engText = element.getAttribute('data-eng');
        const korText = element.getAttribute('data-kor') || element.textContent;

        // data-kor가 없으면 현재 텍스트를 한국어로 저장
        if (!element.getAttribute('data-kor')) {
          element.setAttribute('data-kor', korText);
        }

        // 언어에 따라 텍스트 변경
        if (language === 'en' && engText) {
          element.textContent = engText;
        } else {
          element.textContent = korText;
        }
      });
    };

    // 초기 요소들 업데이트
    const elements = document.querySelectorAll('[data-eng]');
    updateElements(elements);

    // MutationObserver를 사용하여 동적으로 추가되는 요소들 감지
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // 새로 추가된 노드들 확인
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element 노드인 경우
            // 노드 자체가 data-eng를 가지고 있는지 확인
            if (node.hasAttribute && node.hasAttribute('data-eng')) {
              updateElements([node]);
            }
            // 자식 노드 중에 data-eng를 가진 요소가 있는지 확인
            if (node.querySelectorAll) {
              const childElements = node.querySelectorAll('[data-eng]');
              if (childElements.length > 0) {
                updateElements(childElements);
              }
            }
          }
        });
      });
    });

    // body의 모든 하위 요소 변경 감지
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // cleanup
    return () => {
      observer.disconnect();
    };
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
