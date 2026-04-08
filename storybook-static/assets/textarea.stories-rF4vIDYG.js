import{r as e}from"./index-DRjF_FHU.js";import{c as i}from"./utils-BQHNewu7.js";const a=e.forwardRef(({className:r,...s},t)=>e.createElement("textarea",{className:i("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","aria-invalid:border-destructive aria-invalid:ring-destructive/40",r),ref:t,...s}));a.displayName="Textarea";function H(r){return typeof r=="string"?r.length:0}function u({label:r="항목명",showLabel:s=!0,showCount:t=!0,max:x=5e3,containerClassName:P,headerClassName:j,className:U,value:f,defaultValue:h,onChange:p,...X}){const g=f!==void 0,[k,F]=e.useState(typeof h=="string"?h:""),b=g?f:k,G=H(b);return e.createElement("div",{className:i("rounded-lg border bg-card px-4 py-3",P)},(s||t)&&e.createElement("div",{className:i("flex items-center justify-between gap-4",j)},s?e.createElement("span",{className:"text-sm font-medium text-foreground"},r):e.createElement("span",null),t?e.createElement("span",{className:"text-sm tabular-nums text-muted-foreground"},G," / ",x):null),e.createElement(a,{...X,value:b,onChange:N=>{p==null||p(N),g||F(N.target.value)},maxLength:x,className:i("mt-2 min-h-[92px] resize-none border-0 bg-transparent px-0 py-0 shadow-none focus-visible:ring-0",U)}))}a.__docgenInfo={description:"",methods:[],displayName:"Textarea"};u.__docgenInfo={description:"",methods:[],displayName:"TextareaBox",props:{label:{defaultValue:{value:'"항목명"',computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},showCount:{defaultValue:{value:"true",computed:!1},required:!1},max:{defaultValue:{value:"5000",computed:!1},required:!1}}};const v=["placeholder","disabled","rows","readOnly","required"],M={title:"UI/Textarea",component:a,parameters:{layout:"centered",controls:{include:v},docs:{description:{component:`### 주요 props

- **placeholder** — 빈 상태 안내 문구.
- **disabled** — 입력 비활성.
- **rows** — 기본 보이는 줄 수.
- **readOnly** — 읽기 전용.
- **required** — 필수 필드 힌트.

글자 수·라벨이 필요하면 스토리의 \`TextareaBox\` 조합을 사용하세요.`},controls:{include:v}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"placeholder"},disabled:{control:"boolean",description:"비활성"},rows:{control:"number",description:"표시 줄 수(rows)"},readOnly:{control:"boolean",description:"읽기 전용"},required:{control:"boolean",description:"필수 입력"}}},n={args:{placeholder:"내용을 입력하세요…"}},l={args:{placeholder:"rows=6 예시",rows:6}},o={args:{placeholder:"Disabled",disabled:!0}},c={args:{defaultValue:`여러 줄 텍스트 예시입니다.

- 첫 번째 줄
- 두 번째 줄
- 세 번째 줄`}},d={render:()=>e.createElement("div",{className:"flex w-[min(100%,520px)] flex-col gap-4"},e.createElement("div",{className:"space-y-2"},e.createElement("p",{className:"text-sm font-medium"},"기본"),e.createElement(a,{placeholder:"기본 Textarea"})),e.createElement("div",{className:"space-y-2"},e.createElement("p",{className:"text-sm font-medium"},"작게 (min-height 축소)"),e.createElement(a,{className:"min-h-[44px]",placeholder:"min-h-[44px]"})),e.createElement("div",{className:"space-y-2"},e.createElement("p",{className:"text-sm font-medium"},"크게 (min-height 확대)"),e.createElement(a,{className:"min-h-[140px]",placeholder:"min-h-[140px]"})))},m={name:"글자수 제한",render:()=>e.createElement("div",{className:"w-[min(100%,520px)] space-y-2"},e.createElement(u,{placeholder:"입력하세요",max:5e3,label:"항목명"}),e.createElement(u,{placeholder:"입력하세요",showLabel:!1,showCount:!1,className:"mt-0"}))};var E,w,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "내용을 입력하세요…"
  }
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var T,S,V;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "rows=6 예시",
    rows: 6
  }
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var _,q,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled",
    disabled: true
  }
}`,...(D=(q=o.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var L,O,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: "여러 줄 텍스트 예시입니다.\\n\\n- 첫 번째 줄\\n- 두 번째 줄\\n- 세 번째 줄"
  }
}`,...(B=(O=c.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var R,I,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex w-[min(100%,520px)] flex-col gap-4">\r
      <div className="space-y-2">\r
        <p className="text-sm font-medium">기본</p>\r
        <Textarea placeholder="기본 Textarea" />\r
      </div>\r
      <div className="space-y-2">\r
        <p className="text-sm font-medium">작게 (min-height 축소)</p>\r
        <Textarea className="min-h-[44px]" placeholder="min-h-[44px]" />\r
      </div>\r
      <div className="space-y-2">\r
        <p className="text-sm font-medium">크게 (min-height 확대)</p>\r
        <Textarea className="min-h-[140px]" placeholder="min-h-[140px]" />\r
      </div>\r
    </div>
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var z,C,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "글자수 제한",
  render: () => <div className="w-[min(100%,520px)] space-y-2">\r
      <TextareaBox placeholder="입력하세요" max={5000} label="항목명" />\r
      <TextareaBox placeholder="입력하세요" showLabel={false} showCount={false} className="mt-0" />\r
    </div>
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const Q=["Default","WithRows","Disabled","WithValue","SizingExamples","CharacterLimit"];export{m as CharacterLimit,n as Default,o as Disabled,d as SizingExamples,l as WithRows,c as WithValue,Q as __namedExportsOrder,M as default};
