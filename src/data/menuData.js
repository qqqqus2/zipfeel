/**
 * 애플리케이션 메뉴 데이터 관리 파일
 *
 * 메뉴 구조:
 * - id: 고유 식별자
 * - label: 메뉴 표시 이름
 * - icon: 아이콘 이름 (Icon 컴포넌트에서 사용)
 * - path: 라우팅 경로
 * - description: 메뉴 설명
 * - badge: 배지 텍스트 (선택사항)
 * - disabled: 비활성화 여부 (선택사항)
 */

export const sidebarMenuItems = [
    {
        id: "work-settings",
        label: "작품 설정",
        icon: "import_contacts",
        path: "/work-settings",
        description: "작품의 기본 정보와 설정을 관리합니다",
    },
    {
        id: "writing-activity",
        label: "집필 활동",
        icon: "library_books",
        path: "/writing-activity",
        description: "작품 집필 및 챕터 관리",
    },
    {
        id: "character-management",
        label: "인물 관리",
        icon: "identity_platform",
        path: "/character-management",
        description: "작품 속 인물 정보 관리",
    },
    {
        id: "event-management",
        label: "사건 관리",
        icon: "keep",
        path: "/event-management",
        description: "작품 속 사건 및 플롯 관리",
    },
    {
        id: "world-management",
        label: "배경 관리",
        icon: "planet",
        path: "/world-management",
        description: "작품 배경 및 세계관 관리",
    },
    {
        id: "skill-management",
        label: "스킬 관리",
        icon: "star_shine",
        path: "/skill-management",
        description: "캐릭터 스킬 및 능력 관리",
    },
    {
        id: "item-management",
        label: "아이템 관리",
        icon: "business_center",
        path: "/item-management",
        description: "작품 속 아이템 및 오브젝트 관리",
    },
    {
        id: "reference-library",
        label: "자료실",
        icon: "emoji_objects",
        path: "/reference-library",
        description: "참고 자료 및 리소스 관리",
    },
    {
        id: "submission-management",
        label: "투고 관리",
        icon: "azm",
        path: "/submission-management",
        description: "출판사 투고 현황 관리",
    },
];

/**
 * 헤더 메뉴 데이터 (로그아웃 상태)
 */
export const headerMenuLoggedOut = [
    {
        id: "login",
        label: "로그인",
        path: "/login",
        variant: "ghost",
    },
    {
        id: "signup",
        label: "회원가입",
        path: "/join",
        variant: "point1",
    },
    {
        id: "subscription",
        label: "구독안내",
        path: "/subscription",
        variant: "outline",
    },
];

/**
 * 헤더 메뉴 데이터 (로그인 상태)
 */
export const headerMenuLoggedIn = [
    {
        id: "logout",
        label: "로그아웃",
        path: "/logout",
        variant: "ghost",
    },
    {
        id: "create-work",
        label: "작품 생성",
        path: "/work-settings/new",
        variant: "point1",
        icon: "add",
    },
    {
        id: "work-list",
        label: "작품 목록",
        path: "/work-list",
        variant: "outline",
    },
];

/**
 * 페이지 목록 데이터 (전체 페이지 리스트)
 */
export const pageListData = [
    {
        id: "home",
        category: "메인",
        title: "홈",
        path: "/main",
        description: "메인 랜딩 페이지",
        layout: "MainLayout",
        status: "완료",
    },
    {
        id: "join",
        category: "인증",
        title: "회원가입",
        path: "/join",
        description: "사용자 회원가입 페이지",
        layout: "Custom",
        status: "완료",
    },
    {
        id: "login",
        category: "인증",
        title: "로그인",
        path: "/login",
        description: "사용자 로그인 페이지",
        layout: "MainLayout",
        status: "예정",
    },
    {
        id: "page-list",
        category: "개발",
        title: "페이지 목록",
        path: "/page-list",
        description: "전체 페이지 목록 및 개발 현황",
        layout: "CommonLayout",
        status: "완료",
    },
    {
        id: "work-settings",
        category: "작품 관리",
        title: "작품 설정",
        path: "/work-settings",
        description: "작품 기본 정보 및 설정 관리",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "work-settings-new",
        category: "작품 관리",
        title: "작품 생성",
        path: "/work-settings/new",
        description: "새로운 작품 생성",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "work-list",
        category: "작품 관리",
        title: "작품 목록",
        path: "/work-list",
        description: "사용자의 모든 작품 목록",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "writing-activity",
        category: "작품 관리",
        title: "집필 활동",
        path: "/writing-activity",
        description: "챕터 작성 및 집필 관리",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "character-management",
        category: "세계관 관리",
        title: "인물 관리",
        path: "/character-management",
        description: "캐릭터 프로필 및 관계 관리",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "character-detail",
        category: "세계관 관리",
        title: "인물 상세",
        path: "/character-management/:id",
        description: "개별 캐릭터 상세 정보",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "event-management",
        category: "세계관 관리",
        title: "사건 관리",
        path: "/event-management",
        description: "플롯 및 사건 타임라인 관리",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "world-management",
        category: "세계관 관리",
        title: "배경 관리",
        path: "/world-management",
        description: "작품 배경 및 세계관 설정",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "skill-management",
        category: "세계관 관리",
        title: "스킬 관리",
        path: "/skill-management",
        description: "캐릭터 스킬 및 능력 시스템",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "item-management",
        category: "세계관 관리",
        title: "아이템 관리",
        path: "/item-management",
        description: "작품 속 아이템 및 오브젝트",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "reference-library",
        category: "리소스",
        title: "자료실",
        path: "/reference-library",
        description: "참고 자료 및 리소스 보관",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "submission-management",
        category: "출판",
        title: "투고 관리",
        path: "/submission-management",
        description: "출판사 투고 및 현황 추적",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "subscription",
        category: "서비스",
        title: "구독안내",
        path: "/subscription",
        description: "서비스 구독 플랜 안내",
        layout: "MainLayout",
        status: "예정",
    },
    {
        id: "mypage",
        category: "사용자",
        title: "마이페이지",
        path: "/mypage",
        description: "사용자 프로필 및 설정",
        layout: "CommonLayout",
        status: "예정",
    },
    {
        id: "settings",
        category: "사용자",
        title: "환경설정",
        path: "/settings",
        description: "애플리케이션 환경설정",
        layout: "CommonLayout",
        status: "예정",
    },
];

/**
 * 카테고리별로 그룹화된 페이지 목록 반환
 */
export const getPagesByCategory = () => {
    const categories = {};

    pageListData.forEach((page) => {
        if (!categories[page.category]) {
            categories[page.category] = [];
        }
        categories[page.category].push(page);
    });

    return categories;
};

/**
 * 상태별 페이지 개수 반환
 */
export const getPageStatusCounts = () => {
    return pageListData.reduce((acc, page) => {
        acc[page.status] = (acc[page.status] || 0) + 1;
        return acc;
    }, {});
};

/**
 * ID로 메뉴 아이템 찾기
 */
export const findMenuById = (id) => {
    return sidebarMenuItems.find((item) => item.id === id);
};

/**
 * 경로로 메뉴 아이템 찾기
 */
export const findMenuByPath = (path) => {
    return sidebarMenuItems.find((item) => item.path === path);
};

/**
 * ID로 페이지 정보 찾기
 */
export const findPageById = (id) => {
    return pageListData.find((page) => page.id === id);
};

/**
 * 경로로 페이지 정보 찾기
 */
export const findPageByPath = (path) => {
    return pageListData.find((page) => page.path === path);
};
