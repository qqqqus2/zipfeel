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
        labelEng: "Work Settings",
        icon: "import_contacts",
        path: "/work-settings",
        description: "작품의 기본 정보와 설정을 관리합니다",
        descriptionEng: "Manage basic information and settings for your work",
    },
    {
        id: "writing-activity",
        label: "집필 활동",
        labelEng: "Writing Activity",
        icon: "library_books",
        path: "/writing-activity",
        description: "작품 집필 및 챕터 관리",
        descriptionEng: "Write your work and manage chapters",
    },
    {
        id: "character-management",
        label: "인물 관리",
        labelEng: "Characters",
        icon: "identity_platform",
        path: "/character-list",
        description: "작품 속 인물 정보 관리",
        descriptionEng: "Manage character information in your work",
    },
    {
        id: "event-management",
        label: "사건 관리",
        labelEng: "Events",
        icon: "keep",
        path: "/event-management",
        description: "작품 속 사건 및 플롯 관리",
        descriptionEng: "Manage events and plot in your work",
    },
    {
        id: "world-management",
        label: "배경 관리",
        labelEng: "World",
        icon: "planet",
        path: "/world-management",
        description: "작품 배경 및 세계관 관리",
        descriptionEng: "Manage world settings and background",
    },
    {
        id: "skill-management",
        label: "스킬 관리",
        labelEng: "Skills",
        icon: "star_shine",
        path: "/skill-management",
        description: "캐릭터 스킬 및 능력 관리",
        descriptionEng: "Manage character skills and abilities",
    },
    {
        id: "item-management",
        label: "아이템 관리",
        labelEng: "Items",
        icon: "business_center",
        path: "/item-management",
        description: "작품 속 아이템 및 오브젝트 관리",
        descriptionEng: "Manage items and objects in your work",
    },
    {
        id: "reference-library",
        label: "자료실",
        labelEng: "Library",
        icon: "emoji_objects",
        path: "/reference-library",
        description: "참고 자료 및 리소스 관리",
        descriptionEng: "Manage reference materials and resources",
    },
    {
        id: "submission-management",
        label: "투고 관리",
        labelEng: "Submission",
        icon: "azm",
        path: "/submission-management",
        description: "출판사 투고 현황 관리",
        descriptionEng: "Manage publisher submission status",
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
        icon: "login",
    },
    {
        id: "signup",
        label: "회원가입",
        path: "/join",
        variant: "point1",
        icon: "account_circle",
    },
    {
        id: "create-work",
        label: "작품 생성",
        path: "",
        variant: "outline",
        icon: "book_4",
    },
    {
        id: "subscription",
        label: "구독안내",
        path: "/subscription",
        variant: "outline",
        icon: "sell",
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
        icon: "logout",
    },
    {
        id: "profile",
        label: "내정보관리",
        path: "/profile",
        variant: "point1",
        icon: "face",
    },
    {
        id: "subscription",
        label: "구독안내",
        path: "/subscription",
        variant: "outline",
        icon: "sell",
    },
    {
        id: "create-work",
        label: "작품 생성",
        path: "/work-settings/new",
        variant: "point1",
        icon: "book_4",
    },
    {
        id: "work-list",
        label: "작품 목록",
        path: "/work-list",
        variant: "outline",
        icon: "book_ribbon",
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
        status: "진행중",
    },
    {
        id: "join",
        category: "인증",
        title: "회원가입",
        path: "/join",
        description: "사용자 회원가입 페이지",
        layout: "Custom",
        status: "진행중",
    },
    {
        id: "login",
        category: "인증",
        title: "로그인",
        path: "/login",
        description: "사용자 로그인 페이지",
        layout: "Custom",
        status: "진행중",
    },

    {
        id: "event-management",
        category: "세계관 관리",
        title: "사건 관리",
        path: "/event-management",
        description: "플롯 및 사건 타임라인 관리",
        layout: "CommonLayout",
        status: "진행중",
    },
    {
        id: "character-settings",
        category: "세계관 관리",
        title: "인물 관리",
        path: "/character-settings",
        description: "작중 출연하는 캐릭터를 생성·관리 할 수 있습니다, 각 항목을 눌러 수정할 수 있으며 저장 버튼을 누르면 즉시 반영됩니다",
        layout: "CommonLayout",
        status: "완료",
    },
    {
        id: "character-list",
        category: "세계관 관리",
        title: "캐릭터 목록",
        path: "/character-list",
        description: "작품의 모든 캐릭터를 한눈에 보고 관리합니다",
        layout: "CommonLayout",
        status: "완료",
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
