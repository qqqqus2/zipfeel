import{R as t}from"./index-DRjF_FHU.js";import{B as l}from"./button-BDfZ15N9.js";import{T as n,a as i,b as p,c as C}from"./tooltip-0C1DVLUr.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index--M6JEWVJ.js";import"./index-BKlBQwGM.js";import"./index-BvuF3t5A.js";import"./index-BBUvKJIO.js";import"./index-BrPKIHdt.js";import"./index-D1Rwxldo.js";import"./index-od4dH0T8.js";import"./index-BKFqAqpN.js";const O={title:"UI/Tooltip",component:n,parameters:{layout:"centered"},tags:["autodocs"],decorators:[E=>t.createElement(C,{delayDuration:200},t.createElement(E,null))]},e={render:()=>t.createElement(n,null,t.createElement(i,{asChild:!0},t.createElement(l,{variant:"outline"},"Hover me")),t.createElement(p,null,t.createElement("p",null,"Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip text")))},o={render:()=>t.createElement(n,null,t.createElement(i,{asChild:!0},t.createElement(l,{variant:"outline"},"Top")),t.createElement(p,{side:"top"},t.createElement("p",null,"Appears on top")))},r={render:()=>t.createElement(n,null,t.createElement(i,{asChild:!0},t.createElement(l,{variant:"outline"},"Long content")),t.createElement(p,{className:"max-w-xs"},t.createElement("p",null,"This is a longer tooltip. It can wrap across multiple lines when needed.")))};var a,s,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var T,c,u;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Top</Button>\r
      </TooltipTrigger>\r
      <TooltipContent side="top">\r
        <p>Appears on top</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,x,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const P=["Default","Top","LongText"];export{e as Default,r as LongText,o as Top,P as __namedExportsOrder,O as default};
