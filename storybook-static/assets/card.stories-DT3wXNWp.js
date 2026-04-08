import{r as e}from"./index-DRjF_FHU.js";import{c as n}from"./utils-BQHNewu7.js";import{B as b}from"./button-BDfZ15N9.js";import{c as g}from"./index-D1SQP9Z-.js";import{I as J}from"./info-B03a6rtT.js";import{c as L}from"./createLucideIcon-CfeEeys9.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]],y=L("glasses",K);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],X=L("tag",Q),U=e.createContext("default");function $(){return e.useContext(U)}const Y=g(["rounded-lg p-[20px] shadow-[5px_5px_10px_0px_rgb(230_230_230_/_0.8),-5px_-5px_10px_0px_rgb(255_255_255_/_0.2)]","transition-[color,background-color,border-color,box-shadow,opacity] duration-150"],{variants:{variant:{default:["border border-transparent bg-white text-card-foreground","hover:border-2 hover:border-point-2 hover:bg-gray-1"],hover:"border-2 border-point-2 bg-gray-1 text-card-foreground",active:["relative isolate overflow-hidden border-0 bg-point-2 text-white shadow-md","before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-lg","before:bg-gradient-to-br before:from-white/25 before:via-transparent before:to-transparent","[&>*]:relative [&>*]:z-10"],filled:["border border-transparent bg-white text-card-foreground","hover:border-2 hover:border-point-2 hover:bg-gray-1"],disabled:"pointer-events-none border border-transparent bg-white text-card-foreground opacity-45"}},defaultVariants:{variant:"default"}}),Z=g("font-semibold leading-none tracking-tight",{variants:{variant:{default:"text-gray-6",hover:"text-point-2",active:"text-white",filled:"text-point-2",disabled:"text-gray-3"}},defaultVariants:{variant:"default"}}),ee=g("text-sm",{variants:{variant:{default:"text-gray-3",hover:"text-gray-6",active:"text-white/90",filled:"text-gray-6",disabled:"text-gray-3"}},defaultVariants:{variant:"default"}}),s=e.forwardRef(({className:r,variant:t="default",...a},l)=>e.createElement(U.Provider,{value:t},e.createElement("div",{ref:l,"data-variant":t,className:n(Y({variant:t}),r),...a})));s.displayName="Card";const f=e.forwardRef(({className:r,...t},a)=>e.createElement("div",{ref:a,className:n("flex flex-col space-y-1.5 ",r),...t}));f.displayName="CardHeader";const o=e.forwardRef(({className:r,...t},a)=>{const l=$();return e.createElement("div",{ref:a,className:n(Z({variant:l}),r),...t})});o.displayName="CardTitle";const d=e.forwardRef(({className:r,...t},a)=>{const l=$();return e.createElement("div",{ref:a,className:n(ee({variant:l}),r),...t})});d.displayName="CardDescription";const C=e.forwardRef(({className:r,...t},a)=>e.createElement("div",{ref:a,className:n(r),...t}));C.displayName="CardContent";const v=e.forwardRef(({className:r,...t},a)=>e.createElement("div",{ref:a,className:n("flex items-center p-6 pt-0",r),...t}));v.displayName="CardFooter";s.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};v.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};o.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};d.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};C.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const N=["variant"],ce={title:"UI/Card",component:s,parameters:{layout:"centered",controls:{include:N},docs:{description:{component:"### 주요 props\n\n- **variant** — `default`, `hover`, `active`, `filled`, `disabled` 등 카드 시각 상태.\n\n헤더·본문·푸터는 `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`로 나눕니다."},controls:{include:N}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","hover","active","filled","disabled"],description:"카드 시각 상태(variant)"}}};function i({variant:r,description:t}){return e.createElement(s,{variant:r,className:"w-full max-w-md"},e.createElement("div",{className:"flex items-start justify-between gap-3"},e.createElement("div",{className:"min-w-0 flex-1 space-y-1"},e.createElement("div",{className:"flex items-center gap-1"},e.createElement(o,{className:"text-sm font-semibold"},"컬럼명"),e.createElement("button",{type:"button",className:n("inline-flex size-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",r==="active"?"text-white/80 hover:text-white":"text-gray-4 hover:text-gray-6"),"aria-label":"도움말"},e.createElement(J,{className:"size-3.5",strokeWidth:2,"aria-hidden":!0}))),e.createElement(d,{className:"text-xs leading-snug"},t)),e.createElement("div",{className:"shrink-0 pt-0.5"},r==="hover"?e.createElement("span",{className:"inline-flex size-9 items-center justify-center rounded-full bg-point-2 text-white shadow-sm","aria-hidden":!0},e.createElement(y,{className:"size-4",strokeWidth:2})):null,r==="active"?e.createElement("span",{className:"inline-flex size-9 items-center justify-center rounded-full bg-black/25 text-white shadow-inner","aria-hidden":!0},e.createElement(y,{className:"size-4",strokeWidth:2})):null,r==="default"||r==="filled"||r==="disabled"?e.createElement(X,{className:n("size-9",r==="filled"?"text-gray-6":"text-gray-4"),strokeWidth:1.75,"aria-hidden":!0}):null)))}const x={name:"Variants (컬럼 설정 카드)",render:()=>e.createElement("div",{className:"flex w-full max-w-md flex-col gap-4"},e.createElement(i,{variant:"default",description:"설정 안함"}),e.createElement(i,{variant:"hover",description:"설정 안함"}),e.createElement(i,{variant:"active",description:"설정 안함"}),e.createElement(i,{variant:"filled",description:"일이삼사오육칠팔구십…"}),e.createElement(i,{variant:"disabled",description:"일이삼사오육칠팔구십…"})),parameters:{layout:"padded"}},c={render:()=>e.createElement(s,{className:"w-full max-w-md"},e.createElement(f,null,e.createElement(o,null,"카드 제목"),e.createElement(d,null,"부가 설명은 ",e.createElement("code",{className:"text-foreground"},"CardDescription"),"에 넣습니다.")),e.createElement(C,null,e.createElement("p",{className:"text-sm text-muted-foreground"},"본문 영역입니다. 폼 필드나 리스트 등을 배치할 수 있습니다.")),e.createElement(v,{className:"gap-2"},e.createElement(b,{type:"button",variant:"outline",size:"sm"},"취소"),e.createElement(b,{type:"button",size:"sm"},"확인")))},m={render:()=>e.createElement(s,{className:"w-full max-w-sm"},e.createElement(f,null,e.createElement(o,null,"알림"),e.createElement(d,null,"설명 한 줄")))},p={render:()=>e.createElement(s,{className:"w-full max-w-sm"},e.createElement(C,{className:"pt-6"},e.createElement("p",{className:"text-sm"},e.createElement("code",{className:"rounded bg-muted px-1 py-0.5 text-xs"},"CardContent"),"에만 패딩을 주어 헤더 없이 쓸 수 있습니다.")))},u={render:()=>e.createElement("div",{className:"grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"},["첫째","둘째","셋째"].map(r=>e.createElement(s,{key:r},e.createElement(f,{className:"pb-3"},e.createElement(o,{className:"text-base"},r),e.createElement(d,null,"짧은 부가 설명")),e.createElement(C,{className:"pb-6"},e.createElement("p",{className:"text-sm text-muted-foreground"},"본문 텍스트"))))),parameters:{layout:"padded"}};var h,E,w;x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Variants (컬럼 설정 카드)",
  render: () => <div className="flex w-full max-w-md flex-col gap-4">\r
      <ColumnSettingCard variant="default" description="설정 안함" />\r
      <ColumnSettingCard variant="hover" description="설정 안함" />\r
      <ColumnSettingCard variant="active" description="설정 안함" />\r
      <ColumnSettingCard variant="filled" description="일이삼사오육칠팔구십…" />\r
      <ColumnSettingCard variant="disabled" description="일이삼사오육칠팔구십…" />\r
    </div>,
  parameters: {
    layout: "padded"
  }
}`,...(w=(E=x.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var _,k,D,z,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Card className="w-full max-w-md">\r
      <CardHeader>\r
        <CardTitle>카드 제목</CardTitle>\r
        <CardDescription>\r
          부가 설명은 <code className="text-foreground">CardDescription</code>\r
          에 넣습니다.\r
        </CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm text-muted-foreground">\r
          본문 영역입니다. 폼 필드나 리스트 등을 배치할 수 있습니다.\r
        </p>\r
      </CardContent>\r
      <CardFooter className="gap-2">\r
        <Button type="button" variant="outline" size="sm">\r
          취소\r
        </Button>\r
        <Button type="button" size="sm">\r
          확인\r
        </Button>\r
      </CardFooter>\r
    </Card>
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:"헤더·본문·푸터를 모두 쓰는 기본 패턴",...(S=(z=c.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};var H,T,V,I,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Card className="w-full max-w-sm">\r
      <CardHeader>\r
        <CardTitle>알림</CardTitle>\r
        <CardDescription>설명 한 줄</CardDescription>\r
      </CardHeader>\r
    </Card>
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source},description:{story:"제목만 있는 간단한 카드",...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.description}}};var O,B,F,j,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Card className="w-full max-w-sm">\r
      <CardContent className="pt-6">\r
        <p className="text-sm">\r
          <code className="rounded bg-muted px-1 py-0.5 text-xs">\r
            CardContent\r
          </code>\r
          에만 패딩을 주어 헤더 없이 쓸 수 있습니다.\r
        </p>\r
      </CardContent>\r
    </Card>
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source},description:{story:"본문만 (헤더 없이)",...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.description}}};var W,G,P,q,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">\r
      {["첫째", "둘째", "셋째"].map(label => <Card key={label}>\r
          <CardHeader className="pb-3">\r
            <CardTitle className="text-base">{label}</CardTitle>\r
            <CardDescription>짧은 부가 설명</CardDescription>\r
          </CardHeader>\r
          <CardContent className="pb-6">\r
            <p className="text-sm text-muted-foreground">본문 텍스트</p>\r
          </CardContent>\r
        </Card>)}\r
    </div>,
  parameters: {
    layout: "padded"
  }
}`,...(P=(G=u.parameters)==null?void 0:G.docs)==null?void 0:P.source},description:{story:"그리드에 여러 장 배치 예시",...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};const me=["VariantsColumnStyle","Default","HeaderOnly","ContentOnly","Grid"];export{p as ContentOnly,c as Default,u as Grid,m as HeaderOnly,x as VariantsColumnStyle,me as __namedExportsOrder,ce as default};
