import{r,R as e}from"./index-DRjF_FHU.js";import{B as p}from"./button-BDfZ15N9.js";import{c as b}from"./index-D1SQP9Z-.js";import{c as n}from"./utils-BQHNewu7.js";import{c as w}from"./createLucideIcon-CfeEeys9.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],N=w("folder-open",D);function s({className:a,...t}){return r.createElement("div",{"data-slot":"empty",className:n("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",a),...t})}function i({className:a,...t}){return r.createElement("div",{"data-slot":"empty-header",className:n("flex max-w-sm flex-col items-center gap-2 text-center",a),...t})}const z=b("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",icon:"flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"}},defaultVariants:{variant:"default"}});function l({className:a,variant:t="default",..._}){return r.createElement("div",{"data-slot":"empty-icon","data-variant":t,className:n(z({variant:t,className:a})),..._})}function d({className:a,...t}){return r.createElement("div",{"data-slot":"empty-title",className:n("text-lg font-medium tracking-tight",a),...t})}function c({className:a,...t}){return r.createElement("div",{"data-slot":"empty-description",className:n("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",a),...t})}function h({className:a,...t}){return r.createElement("div",{"data-slot":"empty-content",className:n("flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",a),...t})}s.__docgenInfo={description:"",methods:[],displayName:"Empty"};i.__docgenInfo={description:"",methods:[],displayName:"EmptyHeader"};d.__docgenInfo={description:"",methods:[],displayName:"EmptyTitle"};c.__docgenInfo={description:"",methods:[],displayName:"EmptyDescription"};h.__docgenInfo={description:"",methods:[],displayName:"EmptyContent"};l.__docgenInfo={description:"",methods:[],displayName:"EmptyMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const u=["className"],V={title:"UI/Empty",component:s,parameters:{layout:"centered",controls:{include:u},docs:{description:{component:`### 주요 구성 (shadcn Empty)

- **Empty** — 루트 컨테이너(점선 테두리·중앙 정렬·반응형 패딩).
- **EmptyHeader** — 제목·설명·미디어 묶음.
- **EmptyMedia** — 아이콘 슬롯. \`variant\`: \`default\` | \`icon\`(뮤트 배경 원형 영역).
- **EmptyTitle** — 제목.
- **EmptyDescription** — 부가 설명(내부 링크 스타일 포함).
- **EmptyContent** — 버튼·폼 등 액션 영역.`},controls:{include:u}}},tags:["autodocs"],argTypes:{className:{control:"text",description:"Empty 루트에 추가 클래스"}}},m={render:()=>e.createElement(s,{className:"w-full max-w-md border border-gray-2"},e.createElement(i,null,e.createElement(l,{variant:"icon"},e.createElement(N,{className:"size-6","aria-hidden":!0})),e.createElement(d,null,"폴더가 비어 있습니다"),e.createElement(c,null,"파일을 업로드하거나 새 폴더를 만드세요. ",e.createElement("a",{href:"#"},"도움말 보기"))),e.createElement(h,null,e.createElement(p,{type:"button",size:"sm"},"업로드"),e.createElement(p,{type:"button",variant:"outline",size:"sm"},"취소")))},o={name:"미디어 default",render:()=>e.createElement(s,{className:"w-full max-w-md border border-gray-2"},e.createElement(i,null,e.createElement(l,{variant:"default"},e.createElement(N,{className:"size-10 text-muted-foreground","aria-hidden":!0})),e.createElement(d,null,"검색 결과 없음"),e.createElement(c,null,"다른 키워드로 다시 검색해 보세요.")))};var y,E,f;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Empty className="w-full max-w-md border border-gray-2">\r
      <EmptyHeader>\r
        <EmptyMedia variant="icon">\r
          <FolderOpen className="size-6" aria-hidden />\r
        </EmptyMedia>\r
        <EmptyTitle>폴더가 비어 있습니다</EmptyTitle>\r
        <EmptyDescription>\r
          파일을 업로드하거나 새 폴더를 만드세요. <a href="#">도움말 보기</a>\r
        </EmptyDescription>\r
      </EmptyHeader>\r
      <EmptyContent>\r
        <Button type="button" size="sm">\r
          업로드\r
        </Button>\r
        <Button type="button" variant="outline" size="sm">\r
          취소\r
        </Button>\r
      </EmptyContent>\r
    </Empty>
}`,...(f=(E=m.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var x,g,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "미디어 default",
  render: () => <Empty className="w-full max-w-md border border-gray-2">\r
      <EmptyHeader>\r
        <EmptyMedia variant="default">\r
          <FolderOpen className="size-10 text-muted-foreground" aria-hidden />\r
        </EmptyMedia>\r
        <EmptyTitle>검색 결과 없음</EmptyTitle>\r
        <EmptyDescription>다른 키워드로 다시 검색해 보세요.</EmptyDescription>\r
      </EmptyHeader>\r
    </Empty>
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const j=["Default","MediaDefault"];export{m as Default,o as MediaDefault,j as __namedExportsOrder,V as default};
