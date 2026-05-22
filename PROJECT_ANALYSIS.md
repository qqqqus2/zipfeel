# Zipfeel Project - AI Analysis Documentation

> 생성형 AI를 위한 프로젝트 빠른 분석 문서
> 최종 업데이트: 2026-05-15

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | Zipfeel (집필) |
| **목적** | 창작자를 위한 소설/창작물 관리 플랫폼 |
| **타입** | 웹 애플리케이션 (프론트엔드 프로토타입) |
| **주요 기능** | 작품 관리, 인물/사건/배경/스킬/아이템 관리, 투고 관리 |
| **개발 상태** | UI 컴포넌트 라이브러리 완성, 백엔드 미구현 |
| **언어** | JavaScript (TypeScript 아님) |

---

## 2. 기술 스택

### 핵심 프레임워크
- **Next.js 16.2.1** (App Router)
- **React 18.3.1**
- **Tailwind CSS v4** (CSS 변수 기반)

### UI 라이브러리
- **Radix UI** (접근성 우수한 헤드리스 컴포넌트)
- **shadcn/ui 패턴** (커스텀 구현)
- **Lucide React** (아이콘)

### 주요 기능 라이브러리
- **@dnd-kit** - 드래그 앤 드롭
- **@tanstack/react-table** - 테이블 정렬/선택
- **cmdk** - 커맨드 팔레트
- **sonner** - 토스트 알림
- **next-themes** - 다크모드 지원

### 개발 도구
- **Storybook 8.6.18** (Vite 빌더)
- **ESLint 9**
- **style-dictionary** - 디자인 토큰 관리

---

## 3. 프로젝트 구조

```
zipfeel/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (main)/              # 메인 랜딩 레이아웃
│   │   ├── (with-shell)/        # 사이드바 포함 레이아웃
│   │   ├── join/                # 회원가입 플로우
│   │   ├── layout.jsx           # 루트 레이아웃
│   │   └── globals.css          # 전역 스타일 + 디자인 토큰
│   ├── components/
│   │   ├── layout/              # 레이아웃 컴포넌트 (6개)
│   │   └── ui/                  # 재사용 가능한 UI 컴포넌트 (60+ 개)
│   ├── lib/
│   │   └── utils.js             # cn() 유틸리티
│   └── stories/                 # Storybook 문서
├── public/
│   └── icon/                    # 80+ 커스텀 SVG 아이콘
├── scripts/
│   └── build-icon-sprite.mjs    # 아이콘 스프라이트 생성기
├── .storybook/                  # Storybook 설정
└── [설정 파일들]
```

### 주요 파일 경로

| 파일 | 경로 | 역할 |
|------|------|------|
| 루트 레이아웃 | `src/app/layout.jsx` | 폰트, 메타데이터 설정 |
| 전역 스타일 | `src/app/globals.css` | Tailwind + CSS 변수 디자인 토큰 |
| 메인 레이아웃 | `src/components/layout/MainLayout.jsx` | 헤더 + 푸터 포함 메인 레이아웃 |
| 앱 레이아웃 | `src/components/layout/CommonLayout.jsx` | 좌측 네비게이션 포함 |
| 좌측 네비 | `src/components/layout/CommonLnb.jsx` | 9개 메뉴 (작품/인물/사건 등) |
| 헤더 | `src/components/layout/Header.jsx` | 로그인 상태별 조건부 렌더링 |
| 푸터 | `src/components/layout/Footer.jsx` | 데스크탑 플로팅 / 모바일 액션바 |
| 아이콘 | `src/components/ui/icon.jsx` | SVG 스프라이트 시스템 |
| 버튼 | `src/components/ui/button.jsx` | 11개 변형, 4개 사이즈 |
| 탭 | `src/components/ui/tabs.jsx` | 5개 시각적 변형 |
| 테이블 | `src/components/ui/table.jsx` | 정렬/선택 기능 |
| 폼 필드 | `src/components/ui/field.jsx` | 유효성 검사 + 메시지 시스템 |
| 드래그앤드롭 | `src/components/ui/drag-drop.jsx` | 멀티 컨테이너 보드 |

---

## 4. 라우팅 구조

### 라우트 그룹

1. **(main)** - 메인 페이지
   - 레이아웃: `MainLayout`
   - 특징: 보라색 헤더, 사이드바 없음
   - 페이지: `/` (홈)

2. **(with-shell)** - 애플리케이션 페이지
   - 레이아웃: `CommonLayout`
   - 특징: 좌측 네비게이션 바 포함
   - 페이지: `/sub` (예시)

3. **join** - 회원가입
   - 레이아웃: 커스텀 join 레이아웃
   - 페이지: `/join`

---

## 5. 핵심 기능

### 5.1 네비게이션 시스템

**CommonLnb (좌측 메뉴바)** - 9개 관리 메뉴:
1. 작품 설정
2. 집필 활동
3. 인물 관리
4. 사건 관리
5. 배경 관리
6. 스킬 관리
7. 아이템 관리
8. 자료실
9. 투고 관리

**Header (상단 헤더)**:
- 로그아웃 상태: 로그인, 회원가입, 구독안내
- 로그인 상태: 로그아웃, 작품 생성, 작품 목록
- 언어 선택기 포함

### 5.2 UI 컴포넌트 시스템

#### 버튼 (`src/components/ui/button.jsx`)
```javascript
// 11개 변형
variants: {
  default, destructive, outline, outlinePoint1,
  secondary, ghost, link,
  point1, point2, point3,  // 테마 컬러
  sub1, sub2, sub3, sub4, sub8  // 액센트 컬러
}

// 4개 사이즈
sizes: { xs, sm, default, lg, full }

// 6개 라운드 옵션
rounded: { none, sm, md, lg, xl, full }
```

#### 탭 (`src/components/ui/tabs.jsx`)
```javascript
// 5개 시각적 변형
1. underline: 슬라이딩 언더라인
2. slash: 사선 모양 배경
3. solid: 다크 바 + 하단 강조
4. solidRounded: 둥근 컨테이너
5. vertical: 세로 레이아웃

// 특징
- 슬라이딩 인디케이터 애니메이션
- 활성 탭 자동 중앙 스크롤
- 오버플로우 엣지 페이드 효과
```

#### 테이블 (`src/components/ui/table.jsx`)
```javascript
// 고급 기능
- 정렬 가능한 컬럼 (클릭으로 asc/desc/none)
- 행 선택 (클릭으로 선택 + 시각적 피드백)
- 반응형 (데스크탑 테이블 + 모바일 카드 뷰)
- DataTable 컴포넌트 (간단한 API)
- 스트라이프 행 (교대 배경)
- 빈 상태 커스터마이징
```

#### 폼 필드 (`src/components/ui/field.jsx`)
```javascript
// 구성 요소
<Field>           // 컨테이너
  <FieldLabel />  // 라벨 (필수 표시 지원)
  <FieldContent /> // 입력 영역
  <FieldMessage /> // 유효성 메시지 (성공/에러)
</Field>

// 기능
- 수직/수평/반응형 레이아웃
- 필수 필드 표시
- 유효성 검사 상태 (아이콘 포함)
- 접근성 (ARIA 속성)
```

#### 드래그 앤 드롭 (`src/components/ui/drag-drop.jsx`)
```javascript
// DragDropBoard 컴포넌트
- 멀티 컨테이너 드래그 앤 드롭 보드
- 카드 기반 아이템 (제목 + 메타데이터)
- 시각적 드롭 인디케이터
- 드래그 오버레이 (포털)
- 컨테이너 간 이동 지원
- 키보드 네비게이션
- 터치 디바이스 지원
```

### 5.3 아이콘 시스템

**커스텀 SVG 스프라이트 시스템**:
- 스크립트: `scripts/build-icon-sprite.mjs`
- 80+ 개의 SVG 아이콘을 하나의 스프라이트로 통합
- `currentColor`로 테마 색상 적용 가능
- 단일 HTTP 요청으로 모든 아이콘 로드

**Icon 컴포넌트**:
```jsx
<Icon name="book_4" size={24} />
```

**주요 아이콘 카테고리**:
- 인증: login, logout, account
- 책/작성: book_4, library_books, import_contacts
- 관리: identity_platform, keep, planet, star_shine
- UI 컨트롤: expand, collapse, more_vert, cancel
- 상태: check_circle, warning, sentiment_sad
- 특수: logo, logo-black, ico-lang

---

## 6. 디자인 시스템

### 컬러 팔레트 (CSS 변수 기반)

```css
/* src/app/globals.css 참조 */

/* Point Colors (Primary) */
--color-point-1: #4f378a;  /* 딥 퍼플 */
--color-point-2: #8557ff;  /* 브라이트 퍼플 (액센트) */
--color-point-3: #aca7cb;  /* 라이트 퍼플 */

/* Sub Colors */
--color-sub-1: #990000;    /* 다크 레드 */
--color-sub-2: #c30000;    /* 레드 */
--color-sub-3: #be94ff;    /* 라이트 퍼플 */
--color-sub-4: #e9c6ff;    /* 페일 퍼플 */
--color-sub-5: #774a41;    /* 브라운 */
--color-sub-6: #bea6a1;    /* 베이지 */
--color-sub-7: #dfd7d5;    /* 라이트 베이지 */
--color-sub-8: #ffba41;    /* 골드 */

/* Gray Scale */
--color-gray-1 to --color-gray-7
--color-black: #000000;
--color-white: #ffffff;
```

### 타이포그래피

**폰트**: NanumSquareRound (한국어 최적화)

**반응형 스케일** (모바일 / 데스크탑):
- biggest: 20px / 24px
- page-title: 16px / 18px
- con-name: 14px / 16px
- con-title: 16px / 16px
- con-medium: 14px / 14px
- con-small: 12px / 12px

**유틸리티 클래스**: fz-12, fz-14, fz-16, fz-18, fz-20, fz-24

### 컴포넌트 토큰

```css
/* 탭 색상 */
--color-tabs-surface-1 to --color-tabs-surface-3
--color-tabs-label-1 to --color-tabs-label-3

/* 차트 색상 */
--color-chart-1 to --color-chart-5
```

---

## 7. 상태 관리 및 패턴

### 아키텍처 패턴

1. **Atomic Design 원칙**
   - Layout 컴포넌트 (Organisms)
   - UI 컴포넌트 (Molecules/Atoms)
   - 명확한 관심사 분리

2. **컴포지션 패턴**
   - 복합 컴포넌트 (Field, Table, Tabs)
   - Context 기반 상태 공유
   - 유연한 재사용 가능 인터페이스

3. **변형 주도 디자인**
   - class-variance-authority로 체계적 변형
   - 컴포넌트 간 일관된 API
   - 쉬운 테마 커스터마이징

4. **접근성 우선**
   - Radix UI 프리미티브 (키보드 네비게이션, 스크린 리더)
   - ARIA 속성
   - 포커스 관리
   - 시맨틱 HTML

### 상태 관리

**현재 상태**:
- 로컬 React 상태 (useState, useContext)
- Context API 기반 공유 상태 (Table, Tabs 등)
- 글로벌 상태 관리 라이브러리 미사용

**향후 필요 사항**:
- 서버 상태 관리 (React Query, SWR 등)
- 인증 상태 관리
- 폼 상태 관리 (React Hook Form 등)

---

## 8. API 구조 (미구현)

**현재 상태**: API 라우트 및 백엔드 엔드포인트 없음

**예상 API 엔드포인트**:

```typescript
// 인증
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/register

// 작품 관리
GET    /api/works
POST   /api/works
GET    /api/works/:id
PUT    /api/works/:id
DELETE /api/works/:id

// 인물 관리
GET    /api/works/:workId/characters
POST   /api/works/:workId/characters
PUT    /api/works/:workId/characters/:id
DELETE /api/works/:workId/characters/:id

// 사건 관리
GET    /api/works/:workId/events
POST   /api/works/:workId/events
...

// 배경/스킬/아이템 관리 (동일 패턴)
// 자료실
// 투고 관리
```

---

## 9. 데이터베이스 스키마 (미구현)

**현재 상태**: 데이터베이스 연결 없음

**예상 엔티티**:

```
Users
├── id
├── email
├── password_hash
├── name
└── created_at

Works (작품)
├── id
├── user_id (FK)
├── title
├── description
├── genre
└── status

Characters (인물)
├── id
├── work_id (FK)
├── name
├── description
├── traits
└── relationships (JSON)

Events (사건)
├── id
├── work_id (FK)
├── title
├── description
├── timeline
└── related_characters (JSON)

Worlds (배경)
├── id
├── work_id (FK)
├── name
├── description
└── properties (JSON)

Skills (스킬)
├── id
├── work_id (FK)
├── name
├── description
└── effects (JSON)

Items (아이템)
├── id
├── work_id (FK)
├── name
├── description
└── properties (JSON)

References (자료실)
├── id
├── work_id (FK)
├── title
├── file_url
└── created_at

Submissions (투고)
├── id
├── work_id (FK)
├── platform
├── status
└── submitted_at
```

---

## 10. 빌드 및 스크립트

### NPM 스크립트

```json
{
  "dev": "next dev",              // 개발 서버
  "build": "next build",          // 프로덕션 빌드
  "start": "next start",          // 프로덕션 서버
  "lint": "next lint",            // ESLint
  "build:icons": "node scripts/build-icon-sprite.mjs",  // 아이콘 스프라이트 생성
  "storybook": "storybook dev -p 6007",                 // Storybook 개발 서버
  "build-storybook": "storybook build"                  // Storybook 정적 빌드
}
```

### 아이콘 빌드 프로세스

**스크립트**: `scripts/build-icon-sprite.mjs`

1. `public/icon/*.svg` 파일 스캔
2. viewBox 및 내부 콘텐츠 추출
3. 색상 정규화 (black → currentColor)
4. ID 충돌 방지 접두사 추가
5. `sprite.svg` 생성 (모든 아이콘 `<symbol>` 형태)

---

## 11. Storybook 구성

**설정 파일**: `.storybook/main.js`

```javascript
{
  framework: '@storybook/react-vite',
  stories: '../src/**/*.stories.@(js|jsx|mjs)',
  staticDirs: ['../public'],
  viteFinal: {
    resolve: {
      alias: { '@': '../src' }
    }
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  port: 6007
}
```

**Storybook 문서화된 컴포넌트**: 30+ 개
- 모든 UI 컴포넌트에 `.stories.jsx` 파일 존재
- 변형, 상태, 인터랙션 예제 포함

---

## 12. 개발 현황

### ✅ 완료된 작업

- [x] 완전한 UI 컴포넌트 라이브러리 (30+ 컴포넌트)
- [x] 레이아웃 시스템 (다중 변형)
- [x] 디자인 시스템 (종합 토큰)
- [x] 아이콘 시스템 (스프라이트 생성)
- [x] Storybook 문서화
- [x] 폼 시스템 (유효성 검사)
- [x] 테이블 (정렬/선택 기능)
- [x] 드래그 앤 드롭
- [x] 반응형 레이아웃
- [x] 접근성 기능

### ❌ 미완성/누락

- [ ] 백엔드 API
- [ ] 데이터베이스 통합
- [ ] 인증 구현
- [ ] 데이터 영속성
- [ ] 실제 기능 페이지 (인물 관리 등)
- [ ] 사용자 생성 콘텐츠 처리
- [ ] 파일 업로드 기능
- [ ] 투고/출판 기능
- [ ] 검색 기능
- [ ] 다국어 지원 (언어 선택기는 있으나 미구현)

### 프로젝트 상태 평가

**현재**: **고충실도 프로토타입 / 디자인 시스템**
- 견고하고 재사용 가능한 컴포넌트 라이브러리에 중점
- 우수한 UX 패턴과 접근성
- 실제 애플리케이션 로직 및 백엔드 통합 필요

---

## 13. 다음 단계 권장사항

### 우선순위 1: 백엔드 구축
1. API 라우트 설계 및 구현 (`src/app/api/`)
2. 데이터베이스 선택 및 스키마 구축 (PostgreSQL + Prisma 권장)
3. 인증 시스템 (NextAuth.js 권장)

### 우선순위 2: 핵심 기능 구현
1. 작품 CRUD 기능
2. 인물 관리 페이지
3. 사건 관리 페이지
4. 자료실 파일 업로드

### 우선순위 3: 고급 기능
1. 관계 시각화 (인물-사건 관계)
2. 타임라인 뷰
3. 검색 및 필터링
4. 투고 워크플로우

### 우선순위 4: 최적화 및 확장
1. TypeScript 마이그레이션 (타입 안정성)
2. 서버 상태 관리 (React Query)
3. 폼 상태 관리 (React Hook Form)
4. 이미지 최적화
5. SEO 최적화
6. 성능 모니터링

---

## 14. 개발 환경 설정

### 시스템 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# → http://localhost:3000

# Storybook 실행
npm run storybook
# → http://localhost:6007

# 아이콘 스프라이트 재생성
npm run build:icons

# 프로덕션 빌드
npm run build
npm run start
```

### 코드 규칙
- ESLint 설정: `eslint.config.mjs`
- Next.js 권장 규칙 적용
- 경로 별칭: `@/*` → `src/*`

---

## 15. 주요 의존성 버전

```json
{
  "next": "16.2.1",
  "react": "18.3.1",
  "@radix-ui/*": "latest",
  "@dnd-kit/*": "latest",
  "@tanstack/react-table": "8.21.3",
  "tailwindcss": "^4.0.0",
  "class-variance-authority": "0.7.1",
  "lucide-react": "latest",
  "sonner": "latest",
  "storybook": "8.6.18"
}
```

---

## 16. 참고 문서

### 프로젝트 내부 문서
- README.md (Next.js 기본 가이드)
- components.json (shadcn/ui 설정)
- .storybook/ (Storybook 설정)

### 외부 문서
- [Next.js 16 문서](https://nextjs.org/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Storybook](https://storybook.js.org/)

---

## 17. AI 지원을 위한 빠른 참조

### 컴포넌트 사용 예시

```jsx
// 버튼
<Button variant="point1" size="lg" rounded="md">
  작품 생성
</Button>

// 폼 필드
<Field orientation="horizontal">
  <FieldLabel required>작품 제목</FieldLabel>
  <FieldContent>
    <Input placeholder="제목을 입력하세요" />
  </FieldContent>
  <FieldMessage variant="error">필수 입력 항목입니다</FieldMessage>
</Field>

// 아이콘
<Icon name="book_4" size={24} />

// 탭
<Tabs defaultValue="characters" variant="slash">
  <TabsList>
    <TabsTrigger value="characters">인물</TabsTrigger>
    <TabsTrigger value="events">사건</TabsTrigger>
  </TabsList>
  <TabsContent value="characters">...</TabsContent>
</Tabs>

// 테이블
<DataTable
  data={works}
  columns={workColumns}
  sortable
  selectable
/>

// 드래그 앤 드롭 보드
<DragDropBoard
  containers={[
    { id: 'todo', title: '할 일', items: [...] },
    { id: 'progress', title: '진행 중', items: [...] }
  ]}
  onDragEnd={handleDragEnd}
/>
```

### 레이아웃 사용

```jsx
// 메인 레이아웃 (랜딩 페이지)
<MainLayout
  title="창작의 시작"
  description="집필을 시작하세요"
>
  {children}
</MainLayout>

// 앱 레이아웃 (관리 페이지)
<CommonLayout>
  {children}
</CommonLayout>
```

### 색상 사용

```jsx
// Tailwind 클래스
className="bg-point-1 text-white"
className="border-sub-8 hover:bg-sub-4"

// CSS 변수
style={{ color: 'rgb(var(--color-point-2))' }}
```

---

## 18. 요약

**Zipfeel**은 한국 창작자를 위한 소설 관리 플랫폼으로, 현재 **프론트엔드 프로토타입 단계**입니다.

**강점**:
- 프로덕션 준비된 UI 컴포넌트 라이브러리
- 우수한 접근성 및 사용자 경험
- 체계적인 디자인 시스템
- Storybook 문서화
- 반응형 디자인

**다음 필요 작업**:
- 백엔드 API 개발
- 데이터베이스 통합
- 인증 시스템
- 실제 기능 페이지 구현

**예상 기능**:
- 작품 관리 (소설, 시나리오 등)
- 인물/사건/배경/스킬/아이템 관리
- 관계 시각화
- 타임라인
- 자료실 (참고 자료 업로드)
- 투고 관리 (출판사 제출 추적)

프로젝트는 견고한 프론트엔드 기반을 갖추고 있으며, 백엔드 개발을 통해 완전한 기능을 갖춘 애플리케이션으로 발전할 준비가 되어 있습니다.

---

**문서 작성**: Claude AI
**분석 기준**: 2026-05-15
**프로젝트 경로**: `I:\알바\zipfeel`
