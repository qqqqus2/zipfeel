import{r as e}from"./index-DRjF_FHU.js";import{B as x}from"./button-BDfZ15N9.js";import{c as s}from"./utils-BQHNewu7.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";const n=e.forwardRef(({className:r,...a},t)=>e.createElement("div",{ref:t,className:s("p-[20px] rounded-lg bg-white text-card-foreground shadow-[5px_5px_10px_0px_rgb(230_230_230_/_0.8),-5px_-5px_10px_0px_rgb(255_255_255_/_0.2)]",r),...a}));n.displayName="Card";const l=e.forwardRef(({className:r,...a},t)=>e.createElement("div",{ref:t,className:s("flex flex-col space-y-1.5 ",r),...a}));l.displayName="CardHeader";const i=e.forwardRef(({className:r,...a},t)=>e.createElement("div",{ref:t,className:s("font-semibold leading-none tracking-tight",r),...a}));i.displayName="CardTitle";const p=e.forwardRef(({className:r,...a},t)=>e.createElement("div",{ref:t,className:s("text-sm text-muted-foreground",r),...a}));p.displayName="CardDescription";const C=e.forwardRef(({className:r,...a},t)=>e.createElement("div",{ref:t,className:s(r),...a}));C.displayName="CardContent";const u=e.forwardRef(({className:r,...a},t)=>e.createElement("div",{ref:t,className:s("flex items-center p-6 pt-0",r),...a}));u.displayName="CardFooter";n.__docgenInfo={description:"",methods:[],displayName:"Card"};l.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};u.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};i.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};C.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const K={title:"UI/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.createElement(n,{className:"w-full max-w-md"},e.createElement(l,null,e.createElement(i,null,"카드 제목"),e.createElement(p,null,"부가 설명은 ",e.createElement("code",{className:"text-foreground"},"CardDescription"),"에 넣습니다.")),e.createElement(C,null,e.createElement("p",{className:"text-sm text-muted-foreground"},"본문 영역입니다. 폼 필드나 리스트 등을 배치할 수 있습니다.")),e.createElement(u,{className:"gap-2"},e.createElement(x,{type:"button",variant:"outline",size:"sm"},"취소"),e.createElement(x,{type:"button",size:"sm"},"확인")))},o={render:()=>e.createElement(n,{className:"w-full max-w-sm"},e.createElement(l,null,e.createElement(i,null,"알림"),e.createElement(p,null,"설명 한 줄")))},c={render:()=>e.createElement(n,{className:"w-full max-w-sm"},e.createElement(C,{className:"pt-6"},e.createElement("p",{className:"text-sm"},e.createElement("code",{className:"rounded bg-muted px-1 py-0.5 text-xs"},"CardContent"),"에만 패딩을 주어 헤더 없이 쓸 수 있습니다.")))},m={render:()=>e.createElement("div",{className:"grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"},["첫째","둘째","셋째"].map(r=>e.createElement(n,{key:r},e.createElement(l,{className:"pb-3"},e.createElement(i,{className:"text-base"},r),e.createElement(p,null,"짧은 부가 설명")),e.createElement(C,{className:"pb-6"},e.createElement("p",{className:"text-sm text-muted-foreground"},"본문 텍스트"))))),parameters:{layout:"padded"}};var N,f,g,E,y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"헤더·본문·푸터를 모두 쓰는 기본 패턴",...(y=(E=d.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};var _,w,b,D,v;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Card className="w-full max-w-sm">\r
      <CardHeader>\r
        <CardTitle>알림</CardTitle>\r
        <CardDescription>설명 한 줄</CardDescription>\r
      </CardHeader>\r
    </Card>
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:"제목만 있는 간단한 카드",...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.description}}};var H,h,T,I,B;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(h=c.parameters)==null?void 0:h.docs)==null?void 0:T.source},description:{story:"본문만 (헤더 없이)",...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.description}}};var R,F,O,z,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"그리드에 여러 장 배치 예시",...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};const L=["Default","HeaderOnly","ContentOnly","Grid"];export{c as ContentOnly,d as Default,m as Grid,o as HeaderOnly,L as __namedExportsOrder,K as default};
