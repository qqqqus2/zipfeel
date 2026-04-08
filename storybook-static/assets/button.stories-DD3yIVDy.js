import{R as t}from"./index-DRjF_FHU.js";import{B as e}from"./button-BDfZ15N9.js";import{I as n}from"./icon-BAFjukc-.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";const r=["variant","size","asChild","disabled","children"],N={title:"UI/Button",component:e,parameters:{layout:"centered",controls:{include:r},docs:{description:{component:"### 주요 props\n\n- **variant** — 배경·테두리·텍스트 색 등 시각 스타일. 시맨틱(`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`)과 Figma 토큰(`point1`–`point3`, `sub1`–`sub4`, `sub8`), 포인트 테두리 `oulinePoint1` 등.\n- **size** — 높이·좌우 패딩·내부 아이콘 크기. `default`, `sm`, `lg`, 가로 전체 `full`, 정사각 아이콘 `icon` / `iconSm`.\n- **asChild** — `true`면 내용을 버튼 대신 **자식 한 요소**로 렌더(Radix Slot). 링크·커스텀 컴포넌트를 버튼 스타일로 쓸 때 사용.\n- **disabled** — 상호작용 불가, 비활성 스타일.\n- **children** — 라벨 텍스트, 아이콘, 혼합 콘텐츠.\n\n표준 `button` 속성(`type`, `onClick`, `aria-*` 등)은 그대로 전달됩니다."},controls:{include:r}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","oulinePoint1","secondary","ghost","link","point1","point2","point3","sub1","sub2","sub3","sub4","sub8"],description:"시각적 스타일(variant)"},size:{control:"select",options:["default","sm","lg","full","icon","iconSm"],description:"크기·패딩"},asChild:{control:"boolean",description:"true면 자식 단일 노드로 렌더(Slot)"},disabled:{control:"boolean",description:"비활성"},children:{control:"text",description:"버튼 텍스트·내용"}}},a={args:{children:"Button",variant:"default"}},o={render:()=>t.createElement("div",{className:"flex flex-col gap-6 p-8 bg-gray-1"},t.createElement("div",null,t.createElement("h3",{className:"text-lg font-semibold mb-3 text-gray-6"},"Default Colors"),t.createElement("div",{className:"flex gap-4 flex-wrap"},t.createElement(e,{variant:"default"},"Default"),t.createElement(e,{variant:"destructive"},"Destructive"),t.createElement(e,{variant:"outline"},"Outline"),t.createElement(e,{variant:"secondary"},"Secondary"),t.createElement(e,{variant:"ghost"},"Ghost"),t.createElement(e,{variant:"link"},"Link"))),t.createElement("div",null,t.createElement("h3",{className:"text-lg font-semibold mb-3 text-gray-6"},"Point Colors"),t.createElement("div",{className:"flex gap-4 flex-wrap"},t.createElement(e,{variant:"point1"},"Point 1"),t.createElement(e,{variant:"point2"},"Point 2"),t.createElement(e,{variant:"point3"},"Point 3"))),t.createElement("div",null,t.createElement("h3",{className:"text-lg font-semibold mb-3 text-gray-6"},"Sub Colors"),t.createElement("div",{className:"flex gap-4 flex-wrap"},t.createElement(e,{variant:"sub1"},"Sub 1"),t.createElement(e,{variant:"sub2"},"Sub 2"),t.createElement(e,{variant:"sub3"},"Sub 3"),t.createElement(e,{variant:"sub4"},"Sub 4"),t.createElement(e,{variant:"sub8"},"Sub 8"))),t.createElement("div",null,t.createElement("h3",{className:"text-lg font-semibold mb-3 text-gray-6"},"Sizes"),t.createElement("div",{className:"flex gap-4 flex-wrap items-center"},t.createElement(e,{variant:"point2",size:"sm"},"Small"),t.createElement(e,{variant:"point2",size:"default"},"Default"),t.createElement(e,{variant:"point2",size:"lg"},"Large"))),t.createElement("div",null,t.createElement("h3",{className:"text-lg font-semibold mb-3 text-gray-6"},"Icon"),t.createElement("div",{className:"flex gap-4 flex-wrap items-center"},t.createElement(e,{size:"sm","aria-label":"설정"},t.createElement(n,{name:"more_vert",size:16,className:"text-gray-6"})),t.createElement(e,{size:"icon","aria-label":"설정"},t.createElement(n,{name:"more_vert",className:"text-gray-6"})),t.createElement(e,{variant:"ghost",size:"sm",className:"group hover:text-point-2 "},t.createElement(n,{name:"diamond",className:"text-gray-6 group-hover:text-point-2"}),"수정"),t.createElement(e,{variant:"ghost",size:"sm",className:"group"},"수정",t.createElement(n,{name:"diamond",className:"text-gray-6 group-hover:text-point-2"})))),t.createElement("div",null,t.createElement("h3",{className:"text-lg font-semibold mb-3 text-gray-6"},"Icon + Text (Sprite)"),t.createElement("div",{className:"flex flex-wrap gap-4"},t.createElement("div",{className:"flex gap-4 flex-wrap items-center"},t.createElement(e,{variant:"ghost",size:"sm",className:"group text-sm font-bold hover:text-point-2 active:text-point-1"},t.createElement(n,{name:"diamond",className:"group-hover:text-point-2 group-active:text-point-1 group-disabled:gray-2"}),"수정"),t.createElement(e,{variant:"ghost",size:"sm",className:"group text-sm font-bold hover:text-point-2 active:text-point-1 disabled:text-gray-2",disabled:!0},t.createElement(n,{name:"diamond",className:"group-hover:text-point-2 group-active:text-point-1 group-disabled:text-gray-2"}),"수정"),t.createElement(e,{variant:"ghost",size:"sm",className:"group text-sm font-bold hover:text-point-2 active:text-point-1"},t.createElement(n,{name:"ink_eraser",className:"group-hover:text-point-2 group-active:text-point-1 group-disabled:text-point-3"}),"삭제"),t.createElement(e,{variant:"ghost",size:"sm",className:"group text-sm font-bold hover:text-point-2 active:text-point-1 disabled:text-gray-2",disabled:!0},t.createElement(n,{name:"ink_eraser",className:"text-point-1 group-hover:text-white group-disabled:text-gray-2"}),"삭제")),t.createElement("div",{className:"flex gap-4 flex-wrap items-center"},t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold"},t.createElement(n,{name:"login",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"로그인"),t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold",disabled:!0},t.createElement(n,{name:"login",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"로그인"),t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold"},t.createElement(n,{name:"logout",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"로그아웃"),t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold",disabled:!0},t.createElement(n,{name:"logout",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"로그아웃")),t.createElement("div",{className:"flex gap-4 flex-wrap items-center"},t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold"},t.createElement(n,{name:"login",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"회원가입"),t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold",disabled:!0},t.createElement(n,{name:"login",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"회원가입"),t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold"},t.createElement(n,{name:"logout",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"내정보관리"),t.createElement(e,{variant:"oulinePoint1",className:"group text-sm font-bold",disabled:!0},t.createElement(n,{name:"logout",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"내정보관리")),t.createElement("div",{className:"flex gap-4 flex-wrap items-center"},t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold"},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"작품 생성"),t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold",disabled:!0},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"작품 생성"),t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold"},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"작품 목록"),t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold",disabled:!0},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"작품 목록")),t.createElement("div",{className:"flex gap-4 flex-wrap items-center"},t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold"},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"내역 추가"),t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold",disabled:!0},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"내역 추가"),t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold"},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"내역 추가"),t.createElement(e,{variant:"oulinePoint1",className:"group rounded-full text-sm font-bold",disabled:!0},t.createElement(n,{name:"search_activity",className:"text-point-1 group-hover:text-white group-disabled:text-point-3"}),"내역 추가")))))};var i,l,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default"
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var m,u,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-8 bg-gray-1">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3 text-gray-6">\r
          Default Colors\r
        </h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Button variant="default">Default</Button>\r
          <Button variant="destructive">Destructive</Button>\r
          <Button variant="outline">Outline</Button>\r
          <Button variant="secondary">Secondary</Button>\r
          <Button variant="ghost">Ghost</Button>\r
          <Button variant="link">Link</Button>\r
        </div>\r
      </div>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Point Colors</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Button variant="point1">Point 1</Button>\r
          <Button variant="point2">Point 2</Button>\r
          <Button variant="point3">Point 3</Button>\r
        </div>\r
      </div>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Sub Colors</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Button variant="sub1">Sub 1</Button>\r
          <Button variant="sub2">Sub 2</Button>\r
          <Button variant="sub3">Sub 3</Button>\r
          <Button variant="sub4">Sub 4</Button>\r
          <Button variant="sub8">Sub 8</Button>\r
        </div>\r
      </div>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Sizes</h3>\r
        <div className="flex gap-4 flex-wrap items-center">\r
          <Button variant="point2" size="sm">\r
            Small\r
          </Button>\r
          <Button variant="point2" size="default">\r
            Default\r
          </Button>\r
          <Button variant="point2" size="lg">\r
            Large\r
          </Button>\r
        </div>\r
      </div>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3 text-gray-6">Icon</h3>\r
        <div className="flex gap-4 flex-wrap items-center">\r
          <Button size="sm" aria-label="설정">\r
            <Icon name="more_vert" size={16} className="text-gray-6" />\r
          </Button>\r
          <Button size="icon" aria-label="설정">\r
            <Icon name="more_vert" className="text-gray-6" />\r
          </Button>\r
\r
          <Button variant="ghost" size="sm" className="group hover:text-point-2 ">\r
            <Icon name="diamond" className="text-gray-6 group-hover:text-point-2" />\r
            수정\r
          </Button>\r
          <Button variant="ghost" size="sm" className="group">\r
            수정\r
            <Icon name="diamond" className="text-gray-6 group-hover:text-point-2" />\r
          </Button>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3 text-gray-6">\r
          Icon + Text (Sprite)\r
        </h3>\r
        <div className="flex flex-wrap gap-4">\r
          <div className="flex gap-4 flex-wrap items-center">\r
            <Button variant="ghost" size="sm" className="group text-sm font-bold hover:text-point-2 active:text-point-1">\r
              <Icon name="diamond" className="group-hover:text-point-2 group-active:text-point-1 group-disabled:gray-2" />\r
              수정\r
            </Button>\r
            <Button variant="ghost" size="sm" className="group text-sm font-bold hover:text-point-2 active:text-point-1 disabled:text-gray-2" disabled>\r
              <Icon name="diamond" className="group-hover:text-point-2 group-active:text-point-1 group-disabled:text-gray-2" />\r
              수정\r
            </Button>\r
            <Button variant="ghost" size="sm" className="group text-sm font-bold hover:text-point-2 active:text-point-1">\r
              <Icon name="ink_eraser" className="group-hover:text-point-2 group-active:text-point-1 group-disabled:text-point-3" />\r
              삭제\r
            </Button>\r
            <Button variant="ghost" size="sm" className="group text-sm font-bold hover:text-point-2 active:text-point-1 disabled:text-gray-2" disabled>\r
              <Icon name="ink_eraser" className="text-point-1 group-hover:text-white group-disabled:text-gray-2" />\r
              삭제\r
            </Button>\r
          </div>\r
          <div className="flex gap-4 flex-wrap items-center">\r
            <Button variant="oulinePoint1" className="group text-sm font-bold">\r
              <Icon name="login" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              로그인\r
            </Button>\r
            <Button variant="oulinePoint1" className="group text-sm font-bold" disabled>\r
              <Icon name="login" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              로그인\r
            </Button>\r
            <Button variant="oulinePoint1" className="group text-sm font-bold">\r
              <Icon name="logout" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              로그아웃\r
            </Button>\r
            <Button variant="oulinePoint1" className="group text-sm font-bold" disabled>\r
              <Icon name="logout" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              로그아웃\r
            </Button>\r
          </div>\r
          <div className="flex gap-4 flex-wrap items-center">\r
            <Button variant="oulinePoint1" className="group text-sm font-bold">\r
              <Icon name="login" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              회원가입\r
            </Button>\r
            <Button variant="oulinePoint1" className="group text-sm font-bold" disabled>\r
              <Icon name="login" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              회원가입\r
            </Button>\r
            <Button variant="oulinePoint1" className="group text-sm font-bold">\r
              <Icon name="logout" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              내정보관리\r
            </Button>\r
            <Button variant="oulinePoint1" className="group text-sm font-bold" disabled>\r
              <Icon name="logout" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              내정보관리\r
            </Button>\r
          </div>\r
          <div className="flex gap-4 flex-wrap items-center">\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold">\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              작품 생성\r
            </Button>\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold" disabled>\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              작품 생성\r
            </Button>\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold">\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              작품 목록\r
            </Button>\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold" disabled>\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              작품 목록\r
            </Button>\r
          </div>\r
          <div className="flex gap-4 flex-wrap items-center">\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold">\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              내역 추가\r
            </Button>\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold" disabled>\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              내역 추가\r
            </Button>\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold">\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              내역 추가\r
            </Button>\r
            <Button variant="oulinePoint1" className="group rounded-full text-sm font-bold" disabled>\r
              <Icon name="search_activity" className="text-point-1 group-hover:text-white group-disabled:text-point-3" />\r
              내역 추가\r
            </Button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const E=["Default","FigmaTokens"];export{a as Default,o as FigmaTokens,E as __namedExportsOrder,N as default};
