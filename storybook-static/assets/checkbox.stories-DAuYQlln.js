import{R as e}from"./index-DRjF_FHU.js";import{C as t}from"./checkbox-D-8OsCS9.js";import"./index-Bms3GI6n.js";import"./index--M6JEWVJ.js";import"./jsx-runtime-DiklIkkE.js";import"./index-BKlBQwGM.js";import"./index-Iz9Zo_Nw.js";import"./index-D1Rwxldo.js";import"./index-od4dH0T8.js";import"./utils-BQHNewu7.js";import"./x-BuCBQyXB.js";import"./createLucideIcon-CfeEeys9.js";import"./check-BRxH6xXv.js";const l=["disabled","checked","defaultChecked","required","name","value"],I={title:"UI/Checkbox",component:t,parameters:{layout:"centered",controls:{include:l},docs:{description:{component:`### 주요 props

- **disabled** — 선택 불가·스타일 비활성.
- **checked** — 제어 모드에서의 선택 상태.
- **defaultChecked** — 비제어 모드 초기 선택.
- **required** — 폼에서 반드시 체크해야 할 때.
- **name** / **value** — 폼 제출 시 전달되는 필드 이름·값.

라벨은 보통 인접 \`<label htmlFor>\`와 \`id\`로 연결합니다.`},controls:{include:l}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"비활성"},defaultChecked:{control:"boolean",description:"비제어: 초기 선택"},checked:{control:"boolean",description:"제어: 선택 여부"},required:{control:"boolean",description:"폼에서 필수"},name:{control:"text",description:"폼 필드 name"},value:{control:"text",description:"폼 제출 시 value"}}},r={args:{}},a={args:{defaultChecked:!0}},o={args:{disabled:!0}},s={args:{disabled:!0,defaultChecked:!0}},n={render:()=>e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"terms"}),e.createElement("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},"Accept terms and conditions"))},c={render:()=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"option1",defaultChecked:!0}),e.createElement("label",{htmlFor:"option1",className:"text-sm font-medium"},"Option 1")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"option2"}),e.createElement("label",{htmlFor:"option2",className:"text-sm font-medium"},"Option 2")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"option3"}),e.createElement("label",{htmlFor:"option3",className:"text-sm font-medium"},"Option 3")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"option4",disabled:!0}),e.createElement("label",{htmlFor:"option4",className:"text-sm font-medium opacity-50"},"Option 4 (Disabled)")))};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,f,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,k,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var N,g,E;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">\r
      <Checkbox id="terms" />\r
      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">\r
        Accept terms and conditions\r
      </label>\r
    </div>
}`,...(E=(g=n.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var O,F,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option1" defaultChecked />\r
        <label htmlFor="option1" className="text-sm font-medium">\r
          Option 1\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option2" />\r
        <label htmlFor="option2" className="text-sm font-medium">\r
          Option 2\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option3" />\r
        <label htmlFor="option3" className="text-sm font-medium">\r
          Option 3\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option4" disabled />\r
        <label htmlFor="option4" className="text-sm font-medium opacity-50">\r
          Option 4 (Disabled)\r
        </label>\r
      </div>\r
    </div>
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const K=["Default","Checked","Disabled","DisabledChecked","WithLabel","MultipleCheckboxes"];export{a as Checked,r as Default,o as Disabled,s as DisabledChecked,c as MultipleCheckboxes,n as WithLabel,K as __namedExportsOrder,I as default};
