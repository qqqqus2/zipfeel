import{I as e}from"./input-BjRrX8n3.js";import"./index-DRjF_FHU.js";import"./utils-BQHNewu7.js";const q={title:"UI/Input",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"],description:"Input 타입"},placeholder:{control:"text",description:"Placeholder 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"}}},r={args:{placeholder:"Enter text..."}},a={args:{type:"email",placeholder:"email@example.com"}},t={args:{type:"password",placeholder:"Enter password"}},l={args:{placeholder:"Disabled input",disabled:!0}},s={args:{defaultValue:"Hello World"}},o={render:()=>React.createElement("div",{className:"flex flex-col gap-4 w-80"},React.createElement(e,{type:"text",placeholder:"Text input"}),React.createElement(e,{type:"email",placeholder:"email@example.com"}),React.createElement(e,{type:"password",placeholder:"Password"}),React.createElement(e,{type:"number",placeholder:"Number"}),React.createElement(e,{type:"tel",placeholder:"Phone number"}),React.createElement(e,{type:"url",placeholder:"https://example.com"}),React.createElement(e,{placeholder:"Disabled",disabled:!0}))},c={name:"접두 텍스트(prefixLabel)",render:()=>React.createElement("div",{className:"w-80"},React.createElement(e,{prefixLabel:"항목명",placeholder:"입력하세요"}))},n={name:"접미 텍스트(suffixLabel)",render:()=>React.createElement("div",{className:"w-80"},React.createElement(e,{suffixLabel:"항목명",placeholder:"입력하세요"}))},p={name:"접두·접미 텍스트",render:()=>React.createElement("div",{className:"w-80"},React.createElement(e,{prefixLabel:"항목명",suffixLabel:"항목명",placeholder:"입력하세요"}))};var d,m,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,h,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "email@example.com"
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,b,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password"
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,E,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var L,I,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello World"
  }
}`,...(R=(I=s.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var S,v,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input type="text" placeholder="Text input" />\r
      <Input type="email" placeholder="email@example.com" />\r
      <Input type="password" placeholder="Password" />\r
      <Input type="number" placeholder="Number" />\r
      <Input type="tel" placeholder="Phone number" />\r
      <Input type="url" placeholder="https://example.com" />\r
      <Input placeholder="Disabled" disabled />\r
    </div>
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var N,W,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "접두 텍스트(prefixLabel)",
  render: () => <div className="w-80">\r
      <Input prefixLabel="항목명" placeholder="입력하세요" />\r
    </div>
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var T,A,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "접미 텍스트(suffixLabel)",
  render: () => <div className="w-80">\r
      <Input suffixLabel="항목명" placeholder="입력하세요" />\r
    </div>
}`,...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var H,_,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "접두·접미 텍스트",
  render: () => <div className="w-80">\r
      <Input prefixLabel="항목명" suffixLabel="항목명" placeholder="입력하세요" />\r
    </div>
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const z=["Default","Email","Password","Disabled","WithValue","AllTypes","WithPrefixLabel","WithSuffixLabel","WithPrefixAndSuffix"];export{o as AllTypes,r as Default,l as Disabled,a as Email,t as Password,p as WithPrefixAndSuffix,c as WithPrefixLabel,n as WithSuffixLabel,s as WithValue,z as __namedExportsOrder,q as default};
