// 회원가입 폼 검증 관련 상수

export const VALIDATION_MESSAGES = {
    id: {
        success:
            "사용할 수 있는 아이디입니다.\n다른 아이디 사용을 원할 경우 '다시하기' 버튼을 눌러주세요.",
        error: "사용할 수 없는 아이디입니다.",
    },
    password: {
        error: "두 비밀번호가 일치하지 않습니다.",
    },
    penName: {
        duplicate: "동일 필명 사용자 : 0,0000",
    },
    terms: {
        error: "이용약관 및 개인정보처리방침에 동의해 주세요.",
    },
};

export const VALIDATION_RULES = {
    id: {
        title: "영문, 숫자, 특수문자를 사용해 4~20자 이내로 입력하세요.",
        items: [
            "영문은 대소문자를 구분하여 사용할 수 있습니다.",
            "특수문자는 언더바(_)와 미들바(-)를 사용할 수 있습니다.",
        ],
    },
    idDuplicate: {
        title: "아이디는 중복될 수 없습니다.",
        items: ["중복 확인 버튼을 눌러 확인을 완료해 주세요."],
    },
    password: {
        rules: [
            { title: "영문, 숫자, 특수문자를 중 2개를 포함해야 합니다." },
            { title: "8자 ~ 20자 이내로 입력하세요" },
        ],
    },
    penName: {
        title: "영문, 숫자, 특수문자를 사용해 4~20자 이내로 입력하세요.",
        items: [
            "영문은 대소문자를 구분하여 사용할 수 있습니다.",
            "특수문자는 언더바(_)와 미들바(-)를 사용할 수 있습니다.",
        ],
    },
    penNameDuplicate: {
        title: "아이디는 중복될 수 없습니다.",
        items: ["중복 확인 버튼을 눌러 확인을 완료해 주세요."],
    },
    email: {
        title: "집필 이용과 관련된 공지사항, 약관 변경 등의 메일은 수신동의와 무관하게 발송됩니다.",
    },
};

export const PLACEHOLDERS = {
    id: "아이디를 입력하세요",
    password: "비밀번호를 입력하세요",
    passwordConfirm: "비밀번호 확인",
    penName: "입력하세요",
    emailLocal: "입력하세요",
    emailDomain: "직접입력",
};

export const LABELS = {
    id: "아이디",
    password: "비밀번호",
    penName: "필명",
    email: "이메일 주소",
    marketingConsent: "마케팅 메일 수신 동의",
    termsOfService: "이용약관 동의",
    privacyPolicy: "개인정보 처리방침 동의",
};

export const BUTTONS = {
    duplicateCheck: "중복확인",
    duplicateSearch: "중복조회",
    cancel: "취소",
    submit: "휴대폰 인증 후 가입 완료",
};
