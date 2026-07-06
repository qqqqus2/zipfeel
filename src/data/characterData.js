/**
 * 캐릭터 데이터 관리 파일
 * character-list와 character-settings 페이지에서 공유
 */

// 상태별 아이콘 매핑
export const statusIconMap = {
    생존: "emoji_people",
    죽음: "airline_seat_flat",
    부활: "potted_plant",
    실종: "account_circle_off",
};

// 캐릭터 데이터
export const characterData = [
    {
        id: "3456",
        role: "엑스트라",
        status: "죽음",
        metaLines: [
            { label: "호칭", text: "일이삼사오육칠팔구십" },
            { label: "애칭", text: "일이삼사오육칠팔구십" },
        ],
        title: "이름 텍스트가 길 때 이름 텍스트가 길 때… 이름 텍스트가 길 때 이름 텍스트가 길 때… 이름 텍스트가 길 때 이름 텍스트가 길 때…",
        summary: "한줄 요약 (최대 30자)",
    },
    {
        id: "2345",
        role: "엑스트라",
        status: "생존",
        metaLines: [{ label: "호칭", text: "일이삼사오육칠팔구십" }],
        title: "다른 제목이 매우 길 때 줄임표로 처리합니다…",
        summary: "요약 한 줄",
    },
    {
        id: "4567",
        role: "주연",
        status: "생존",
        metaLines: [
            { label: "호칭", text: "일이삼사" },
            { label: "애칭", text: "오육칠팔" },
        ],
        title: "제목 텍스트",
        summary: "최대 30자 요약 예시",
    },
    {
        id: "8901",
        role: "조연",
        status: "생존",
        metaLines: [{ label: "호칭", text: "일이삼사오육칠팔구십일이삼사" }],
        title: "네 번째 행 제목입니다…",
        summary: "한줄 요약 (최대 30자)",
    },
    {
        id: "1234",
        role: "주연",
        status: "생존",
        metaLines: [
            { label: "호칭", text: "캐릭터5" },
            { label: "애칭", text: "별명5" },
        ],
        title: "다섯 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 5",
    },
    {
        id: "5678",
        role: "조연",
        status: "생존",
        metaLines: [{ label: "호칭", text: "캐릭터6" }],
        title: "여섯 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 6",
    },
    {
        id: "9012",
        role: "엑스트라",
        status: "생존",
        metaLines: [
            { label: "호칭", text: "캐릭터7" },
            { label: "애칭", text: "별명7" },
        ],
        title: "일곱 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 7",
    },
    {
        id: "3457",
        role: "주연",
        status: "실종",
        metaLines: [{ label: "호칭", text: "캐릭터8" }],
        title: "여덟 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 8",
    },
    {
        id: "7890",
        role: "조연",
        status: "부활",
        metaLines: [
            { label: "호칭", text: "캐릭터9" },
            { label: "애칭", text: "별명9" },
        ],
        title: "아홉 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 9",
    },
    {
        id: "2468",
        role: "엑스트라",
        status: "생존",
        metaLines: [{ label: "호칭", text: "캐릭터10" }],
        title: "열 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 10",
    },
    {
        id: "1357",
        role: "주연",
        status: "생존",
        metaLines: [
            { label: "호칭", text: "캐릭터11" },
            { label: "애칭", text: "별명11" },
        ],
        title: "열한 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 11",
    },
    {
        id: "9753",
        role: "조연",
        status: "생존",
        metaLines: [{ label: "호칭", text: "캐릭터12" }],
        title: "열두 번째 캐릭터 이름",
        summary: "캐릭터 요약 설명 12",
    },
];

/**
 * ID로 캐릭터 찾기
 */
export const findCharacterById = (id) => {
    return characterData.find((character) => character.id === id);
};

/**
 * 역할별 캐릭터 필터링
 */
export const getCharactersByRole = (role) => {
    return characterData.filter((character) => character.role === role);
};

/**
 * 상태별 캐릭터 필터링
 */
export const getCharactersByStatus = (status) => {
    return characterData.filter((character) => character.status === status);
};
