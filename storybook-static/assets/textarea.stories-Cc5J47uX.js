import{r as e}from"./index-DRjF_FHU.js";import{c as d}from"./utils-BQHNewu7.js";const a=e.forwardRef(({className:r,...t},s)=>e.createElement("textarea",{className:d("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:s,...t}));a.displayName="Textarea";function H(r){return typeof r=="string"?r.length:0}function u({label:r="항목명",showLabel:t=!0,showCount:s=!0,max:x=5e3,containerClassName:O,headerClassName:P,className:U,value:f,defaultValue:h,onChange:p,...k}){const g=f!==void 0,[A,F]=e.useState(typeof h=="string"?h:""),N=g?f:A,G=H(N);return e.createElement("div",{className:d("rounded-lg border bg-card px-4 py-3",O)},(t||s)&&e.createElement("div",{className:d("flex items-center justify-between gap-4",P)},t?e.createElement("span",{className:"text-sm font-medium text-foreground"},r):e.createElement("span",null),s?e.createElement("span",{className:"text-sm tabular-nums text-muted-foreground"},G," / ",x):null),e.createElement(a,{...k,value:N,onChange:b=>{p==null||p(b),g||F(b.target.value)},maxLength:x,className:d("mt-2 min-h-[92px] resize-none border-0 bg-transparent px-0 py-0 shadow-none focus-visible:ring-0",U)}))}a.__docgenInfo={description:"",methods:[],displayName:"Textarea"};u.__docgenInfo={description:"",methods:[],displayName:"TextareaBox",props:{label:{defaultValue:{value:'"항목명"',computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},showCount:{defaultValue:{value:"true",computed:!1},required:!1},max:{defaultValue:{value:"5000",computed:!1},required:!1}}};const Q={title:"UI/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"},rows:{control:{type:"number",min:2,max:12,step:1},description:"rows 속성"}}},n={args:{placeholder:"내용을 입력하세요…"}},l={args:{placeholder:"rows=6 예시",rows:6}},o={args:{placeholder:"Disabled",disabled:!0}},c={args:{defaultValue:`여러 줄 텍스트 예시입니다.

- 첫 번째 줄
- 두 번째 줄
- 세 번째 줄`}},m={render:()=>e.createElement("div",{className:"flex w-[min(100%,520px)] flex-col gap-4"},e.createElement("div",{className:"space-y-2"},e.createElement("p",{className:"text-sm font-medium"},"기본"),e.createElement(a,{placeholder:"기본 Textarea"})),e.createElement("div",{className:"space-y-2"},e.createElement("p",{className:"text-sm font-medium"},"작게 (min-height 축소)"),e.createElement(a,{className:"min-h-[44px]",placeholder:"min-h-[44px]"})),e.createElement("div",{className:"space-y-2"},e.createElement("p",{className:"text-sm font-medium"},"크게 (min-height 확대)"),e.createElement(a,{className:"min-h-[140px]",placeholder:"min-h-[140px]"})))};function J(){return e.createElement("div",{className:"w-[min(100%,520px)] space-y-2"},e.createElement(u,{placeholder:"입력하세요",max:5e3,label:"항목명"}),e.createElement(u,{placeholder:"입력하세요",showLabel:!1,showCount:!1,className:"mt-0"}))}const i={name:"글자수 제한",render:()=>e.createElement(J,null)};var E,v,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "내용을 입력하세요…"
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,T,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "rows=6 예시",
    rows: 6
  }
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var V,D,L;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled",
    disabled: true
  }
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var _,q,I;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultValue: "여러 줄 텍스트 예시입니다.\\n\\n- 첫 번째 줄\\n- 두 번째 줄\\n- 세 번째 줄"
  }
}`,...(I=(q=c.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var W,z,C;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var R,B,j;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "글자수 제한",
  render: () => <CharacterLimitDemo />
}`,...(j=(B=i.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const X=["Default","WithRows","Disabled","WithValue","SizingExamples","CharacterLimit"];export{i as CharacterLimit,n as Default,o as Disabled,m as SizingExamples,l as WithRows,c as WithValue,X as __namedExportsOrder,Q as default};
