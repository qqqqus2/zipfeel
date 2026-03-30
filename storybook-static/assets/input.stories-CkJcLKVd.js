import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as r}from"./input-jsi5Dy_U.js";import"./index-DRjF_FHU.js";import"./utils-BQHNewu7.js";const W={title:"UI/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"],description:"Input 타입"},placeholder:{control:"text",description:"Placeholder 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"}}},a={args:{placeholder:"Enter text..."}},s={args:{type:"email",placeholder:"email@example.com"}},o={args:{type:"password",placeholder:"Enter password"}},l={args:{placeholder:"Disabled input",disabled:!0}},t={args:{defaultValue:"Hello World"}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"email@example.com"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Number"}),e.jsx(r,{type:"tel",placeholder:"Phone number"}),e.jsx(r,{type:"url",placeholder:"https://example.com"}),e.jsx(r,{placeholder:"Disabled",disabled:!0})]})};var c,n,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,i,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "email@example.com"
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var h,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password"
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,b,w;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var I,f,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello World"
  }
}`,...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var D,E,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input type="text" placeholder="Text input" />\r
      <Input type="email" placeholder="email@example.com" />\r
      <Input type="password" placeholder="Password" />\r
      <Input type="number" placeholder="Number" />\r
      <Input type="tel" placeholder="Phone number" />\r
      <Input type="url" placeholder="https://example.com" />\r
      <Input placeholder="Disabled" disabled />\r
    </div>
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const v=["Default","Email","Password","Disabled","WithValue","AllTypes"];export{p as AllTypes,a as Default,l as Disabled,s as Email,o as Password,t as WithValue,v as __namedExportsOrder,W as default};
