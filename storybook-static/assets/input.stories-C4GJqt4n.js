import{R as e}from"./index-DRjF_FHU.js";import{I as r}from"./input-D3tGSS6G.js";import"./utils-BQHNewu7.js";const W={title:"UI/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"],description:"Input 타입"},placeholder:{control:"text",description:"Placeholder 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"}}},a={args:{placeholder:"Enter text..."}},t={args:{type:"email",placeholder:"email@example.com"}},l={args:{type:"password",placeholder:"Enter password"}},s={args:{placeholder:"Disabled input",disabled:!0}},o={args:{defaultValue:"Hello World"}},p={render:()=>e.createElement("div",{className:"flex flex-col gap-4 w-80"},e.createElement(r,{type:"text",placeholder:"Text input"}),e.createElement(r,{type:"email",placeholder:"email@example.com"}),e.createElement(r,{type:"password",placeholder:"Password"}),e.createElement(r,{type:"number",placeholder:"Number"}),e.createElement(r,{type:"tel",placeholder:"Phone number"}),e.createElement(r,{type:"url",placeholder:"https://example.com"}),e.createElement(r,{placeholder:"Disabled",disabled:!0}))};var c,n,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,u,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "email@example.com"
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var h,y,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password"
  }
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,b,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var w,I,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello World"
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var D,P,S;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input type="text" placeholder="Text input" />\r
      <Input type="email" placeholder="email@example.com" />\r
      <Input type="password" placeholder="Password" />\r
      <Input type="number" placeholder="Number" />\r
      <Input type="tel" placeholder="Phone number" />\r
      <Input type="url" placeholder="https://example.com" />\r
      <Input placeholder="Disabled" disabled />\r
    </div>
}`,...(S=(P=p.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const v=["Default","Email","Password","Disabled","WithValue","AllTypes"];export{p as AllTypes,a as Default,s as Disabled,t as Email,l as Password,o as WithValue,v as __namedExportsOrder,W as default};
