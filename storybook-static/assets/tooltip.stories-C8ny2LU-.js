import{R as t}from"./index-DRjF_FHU.js";import{B as l}from"./button-BDfZ15N9.js";import{T as n,a as i,b as p,c as h}from"./tooltip-ZkU5ZM2n.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index--M6JEWVJ.js";import"./index-BKlBQwGM.js";import"./index-CCoC3Sqw.js";import"./index-BrKBBPft.js";import"./index-DmmVIJtj.js";import"./index-Bv5-5eGk.js";import"./index-D1Rwxldo.js";import"./index-od4dH0T8.js";import"./index-BKFqAqpN.js";const a=["open","defaultOpen","onOpenChange","delayDuration","disableHoverableContent"],U={title:"UI/Tooltip",component:n,parameters:{layout:"centered",controls:{include:a},docs:{description:{component:`### 주요 props (Tooltip 루트)

- **open** — 제어: 표시 여부.
- **defaultOpen** — 비제어: 초기 표시(주로 디버그용).
- **onOpenChange** — 열림 변경 콜백.
- **delayDuration** — 호버 후 나타나기까지 지연(ms).
- **disableHoverableContent** — 콘텐츠 위로 포인터를 옮겨도 유지할지 여부.

보통 \`TooltipProvider\`로 감싸고 \`TooltipTrigger\`·\`TooltipContent\`로 구성합니다.`},controls:{include:a}}},tags:["autodocs"],decorators:[E=>t.createElement(h,{delayDuration:200},t.createElement(E,null))]},e={render:()=>t.createElement(n,null,t.createElement(i,{asChild:!0},t.createElement(l,{variant:"outline"},"Hover me")),t.createElement(p,null,t.createElement("p",null,"Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip text")))},o={render:()=>t.createElement(n,null,t.createElement(i,{asChild:!0},t.createElement(l,{variant:"outline"},"Top")),t.createElement(p,{side:"top"},t.createElement("p",null,"Appears on top")))},r={render:()=>t.createElement(n,null,t.createElement(i,{asChild:!0},t.createElement(l,{variant:"outline"},"Long content")),t.createElement(p,{className:"max-w-xs"},t.createElement("p",null,"This is a longer tooltip. It can wrap across multiple lines when needed.")))};var s,T,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Hover me</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        <p>\r
          Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip\r
          textTooltip textTooltip textTooltip textTooltip text\r
        </p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...(m=(T=e.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Top</Button>\r
      </TooltipTrigger>\r
      <TooltipContent side="top">\r
        <p>Appears on top</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,x,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Long content</Button>\r
      </TooltipTrigger>\r
      <TooltipContent className="max-w-xs">\r
        <p>\r
          This is a longer tooltip. It can wrap across multiple lines when\r
          needed.\r
        </p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const j=["Default","Top","LongText"];export{e as Default,r as LongText,o as Top,j as __namedExportsOrder,U as default};
