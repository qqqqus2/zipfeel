import{r as e}from"./index-DRjF_FHU.js";import{C as j}from"./checkbox-D-8OsCS9.js";import{c as D}from"./utils-BQHNewu7.js";import"./index-Bms3GI6n.js";import"./index--M6JEWVJ.js";import"./jsx-runtime-DiklIkkE.js";import"./index-BKlBQwGM.js";import"./index-Iz9Zo_Nw.js";import"./index-D1Rwxldo.js";import"./index-od4dH0T8.js";import"./x-BuCBQyXB.js";import"./createLucideIcon-CfeEeys9.js";import"./check-BRxH6xXv.js";function V({expanded:a}){return e.createElement("span",{className:"relative flex w-[20px] h-[10px] items-center justify-center"},e.createElement("span",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-foreground"}),e.createElement("span",{className:["absolute left-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] border-2 z-1 rotate-45 bg-white transition-transform duration-150 ease-out",a?"translate-x-[10px]":"translate-x-0"].join(" ")}))}function x({title:a,requiredLabel:l="설정 필수",expanded:o,defaultExpanded:b=!1,onExpandedChange:t,requiredChecked:d,defaultRequiredChecked:n=!1,onRequiredCheckedChange:s,disabled:q,className:h}){const S=d!==void 0,[C,O]=e.useState(n),i=S?d:C,c=o!==void 0,[U,E]=e.useState(b),u=i?c?o:U:!1,I=()=>{if(!i)return;const r=!u;t==null||t(r),c||E(r)},$=r=>{s==null||s(r),S||O(r),r?(t==null||t(!0),c||E(!0)):(t==null||t(!1),c||E(!1))};return e.createElement("div",{className:D("flex w-full items-center justify-between gap-4 py-2",h)},e.createElement("button",{type:"button",onClick:I,disabled:q||!i,className:"flex min-w-0 flex-1 items-center gap-3 text-left disabled:opacity-50","aria-expanded":u,"aria-label":`${a} ${u?"접기":"펼치기"}`},e.createElement("span",{className:"shrink-0"},e.createElement(V,{expanded:u})),e.createElement("span",{className:"truncate text-sm font-semibold text-foreground"},a)),e.createElement("div",{className:"flex shrink-0 items-center gap-3"},e.createElement("span",{className:"text-sm font-medium text-muted-foreground"},l),e.createElement(j,{checked:i,defaultChecked:n,onCheckedChange:r=>$(r===!0),disabled:q,"aria-label":`${a} ${l}`})))}x.__docgenInfo={description:"",methods:[],displayName:"SectionTitleToggle",props:{requiredLabel:{defaultValue:{value:'"설정 필수"',computed:!1},required:!1},defaultExpanded:{defaultValue:{value:"false",computed:!1},required:!1},defaultRequiredChecked:{defaultValue:{value:"false",computed:!1},required:!1}}};const g=["title","requiredLabel","disabled","defaultExpanded","defaultRequiredChecked"],Z={title:"UI/SectionTitleToggle",component:x,parameters:{layout:"padded",controls:{include:g},docs:{description:{component:`### 주요 props

- **title** — 섹션 제목.
- **requiredLabel** — 필수 체크박스 옆 문구.
- **disabled** — 펼침·체크 모두 비활성.
- **defaultExpanded** — 비제어: 초기 펼침 여부.
- **defaultRequiredChecked** — 비제어: 필수 체크 초기값.

제어 모드는 스토리 \`Controlled\` 참고.`},controls:{include:g}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"섹션 제목"},requiredLabel:{control:"text",description:"체크박스 옆 문구"},disabled:{control:"boolean",description:"전체 비활성"},defaultExpanded:{control:"boolean",description:"비제어: 초기 펼침"},defaultRequiredChecked:{control:"boolean",description:"비제어: 초기 필수 체크"}}},m={args:{title:"Section명",requiredLabel:"설정 필수",defaultExpanded:!1,defaultRequiredChecked:!1}},p={args:{title:"Section명",requiredLabel:"설정 필수",defaultExpanded:!0,defaultRequiredChecked:!0}};function A(){const[a,l]=e.useState(!0),[o,b]=e.useState(!0),[t,d]=e.useState(!0),[n,s]=e.useState(!1);return e.createElement("div",{className:"w-full max-w-2xl space-y-1"},e.createElement(x,{title:"Section명",expanded:a,onExpandedChange:l,requiredChecked:o,onRequiredCheckedChange:b}),e.createElement(x,{title:"Section명",expanded:t,onExpandedChange:d,requiredChecked:n,onRequiredCheckedChange:s}))}const f={name:"리스트 예시",render:()=>e.createElement(A,null)};var k,R,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: "Section명",
    requiredLabel: "설정 필수",
    defaultExpanded: false,
    defaultRequiredChecked: false
  }
}`,...(y=(R=m.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var L,N,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: "Section명",
    requiredLabel: "설정 필수",
    defaultExpanded: true,
    defaultRequiredChecked: true
  }
}`,...(T=(N=p.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var v,w,_;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "리스트 예시",
  render: () => <ListExampleStory />
}`,...(_=(w=f.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const ee=["Default","Checked","ListExample"];export{p as Checked,m as Default,f as ListExample,ee as __namedExportsOrder,Z as default};
