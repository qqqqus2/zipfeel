import{R as t}from"./index-DRjF_FHU.js";import{L as p}from"./label-D8BzrfBB.js";import{I as i}from"./input-BjRrX8n3.js";import"./index-BKlBQwGM.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";const o=["children","htmlFor"],L={title:"UI/Label",component:p,parameters:{layout:"centered",controls:{include:o},docs:{description:{component:`### 주요 props

- **children** — 라벨에 보이는 텍스트(또는 인라인 콘텐츠).
- **htmlFor** — 연결할 폼 컨트롤의 \`id\`. 클릭 시 해당 요소로 포커스·연동됩니다.`},controls:{include:o}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"라벨 텍스트"},htmlFor:{control:"text",description:"연결할 컨트롤의 id(htmlFor)"}}},e={args:{children:"라벨"}},r={name:"Input과 연결",render:()=>t.createElement("div",{className:"flex w-[min(100%,320px)] flex-col gap-2"},t.createElement(p,{htmlFor:"story-label-input"},"이메일"),t.createElement(i,{id:"story-label-input",type:"email",placeholder:"name@example.com"}))};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "라벨"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Input과 연결",
  render: () => <div className="flex w-[min(100%,320px)] flex-col gap-2">\r
      <Label htmlFor="story-label-input">이메일</Label>\r
      <Input id="story-label-input" type="email" placeholder="name@example.com" />\r
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const F=["Default","WithInput"];export{e as Default,r as WithInput,F as __namedExportsOrder,L as default};
